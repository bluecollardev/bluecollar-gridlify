<template>
  <div class="resume-pages" ref="pages">
    <div class="resume-toolbar">
      <a :href="src" target="_blank" rel="noopener" download class="resume-download">Download PDF</a>
    </div>
    <p v-if="error" class="resume-status">
      The resume couldn’t be displayed here. <a :href="src" target="_blank" rel="noopener">Open the PDF</a>.
    </p>
    <p v-else-if="!rendered" class="resume-status">Loading resume…</p>
  </div>
</template>

<script>
// Renders every page of the PDF with PDF.js. An <iframe> pointing at a PDF only
// shows the first page on iOS / Android browsers, so the resume is drawn to
// canvases instead. PDF.js is loaded on first open to keep it out of the page bundle.
export default {
  name: 'ResumeViewer',
  props: {
    src: { type: String, required: true }
  },
  data() {
    return { rendered: false, loading: false, error: false }
  },
  methods: {
    async load() {
      if (this.rendered || this.loading) return
      this.loading = true
      try {
        const pdfjs = await import('pdfjs-dist')
        const workerSrc = (await import('pdfjs-dist/build/pdf.worker.min.mjs?url')).default
        pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

        const doc = await pdfjs.getDocument(this.src).promise
        const container = this.$refs.pages
        const width = Math.min(container.clientWidth || 900, 900)
        const ratio = window.devicePixelRatio || 1

        for (let n = 1; n <= doc.numPages; n++) {
          const page = await doc.getPage(n)
          const base = page.getViewport({ scale: 1 })
          const viewport = page.getViewport({ scale: (width / base.width) * ratio })
          const canvas = document.createElement('canvas')
          canvas.className = 'resume-page'
          canvas.width = viewport.width
          canvas.height = viewport.height
          canvas.style.width = `${width}px`
          canvas.setAttribute('aria-label', `Resume page ${n} of ${doc.numPages}`)
          container.appendChild(canvas)
          await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise
        }
        this.rendered = true
      } catch (e) {
        console.error('Resume viewer failed', e)
        this.error = true
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss">
.resume-pages {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem 2rem;
}
.resume-toolbar {
  width: 100%;
  max-width: 900px;
  text-align: right;
}
.resume-download {
  cursor: pointer;
}

/* On desktop, match the profile's "View resume" button */
@media screen and (min-width: 52em) {
  .resume-download {
    display: inline-block;
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #78b7d6 0%, #5a9db8 100%);
    color: #1a1a1a;
    font-size: 0.75rem;
    padding: 0.6rem 1.2rem;
    border: 2px solid #78b7d6;
    border-radius: 3px;
    font-weight: bold;
    letter-spacing: 1.5px;
    text-decoration: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;

    &:hover {
      background: linear-gradient(135deg, #5a9db8 0%, #78b7d6 100%);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
      transform: translateY(-2px);
    }
  }
}
.resume-page {
  max-width: 100%;
  height: auto;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
}
.resume-status {
  text-align: center;
}
</style>
