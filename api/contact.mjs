import { Resend } from 'resend'

const TO = 'info@bluecollardev.com'
// Must be a domain verified in Resend. bluecollardev.com, not the visitor's address —
// sending as the visitor would fail SPF/DKIM. Their address goes in Reply-To.
const FROM = 'Blue Collar Website <site@bluecollardev.com>'

const FIELDS = ['fullname', 'phone', 'email', 'budget', 'city', 'country', 'message', 'nda']
const LABELS = {
  fullname: 'Name',
  phone: 'Phone',
  email: 'Email',
  budget: 'Budget',
  city: 'City',
  country: 'Country',
  nda: 'NDA required',
  message: 'Message'
}

const clean = (v) => (typeof v === 'string' ? v.trim() : v)
const escapeHtml = (v) =>
  String(v ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
  )

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return res.status(400).json({ error: 'Malformed request' })
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Malformed request' })
  }

  // Honeypot: bots fill hidden fields. Answer 200 so they don't learn they were caught.
  if (clean(body['bot-field'])) {
    return res.status(200).json({ ok: true })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set — cannot send contact mail')
    return res.status(500).json({ error: 'Mail is not configured' })
  }

  const fullname = clean(body.fullname) || ''
  const email = clean(body.email) || ''
  const message = clean(body.message) || ''

  if (!fullname || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' })
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ error: 'That email address does not look valid' })
  }
  if (fullname.length > 200 || email.length > 320 || message.length > 5000) {
    return res.status(400).json({ error: 'Submission is too long' })
  }
  // Header injection guard — these end up in Reply-To and Subject.
  if (/[\r\n]/.test(email) || /[\r\n]/.test(fullname)) {
    return res.status(400).json({ error: 'Malformed request' })
  }

  const rows = FIELDS.filter((f) => f !== 'message')
    .map((f) => [LABELS[f], f === 'nda' ? (body[f] ? 'Yes' : 'No') : clean(body[f])])
    .filter(([, v]) => v !== undefined && v !== null && v !== '')

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\n${LABELS.message}:\n${message}\n`

  const html = `
    <table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#666">${escapeHtml(k)}</td>` +
            `<td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`
        )
        .join('')}
    </table>
    <p style="font-family:system-ui,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(
      message
    )}</p>`

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: `${fullname.replace(/["\\]/g, '')} <${email}>`,
      subject: `Website enquiry from ${fullname}`,
      text,
      html
    })

    if (error) {
      console.error('Resend rejected the message:', error)
      return res.status(502).json({ error: 'Could not send your message' })
    }

    return res.status(200).json({ ok: true, id: data?.id })
  } catch (err) {
    console.error('Failed to send contact mail:', err)
    return res.status(502).json({ error: 'Could not send your message' })
  }
}
