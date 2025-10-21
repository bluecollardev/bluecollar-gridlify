<template>
  <div ref="contentDetail" class="detailed-content-panel bg-bc-blue">
    <div class="panel-header flex flex-center pad-left-half pad-right-half"
         style="height: 5rem; position: absolute; right: 0; z-index: 100; width: 100%">
      <div class="flex-grow">
        <h2 class="text-center no-space-top no-space-bottom">Get in Touch</h2>
      </div>
      <b @click="hideDetail()" style="font-size: 1.5rem; cursor: pointer">X</b>
    </div>
    <div class="panel-content pad-top-3 pad-left-1 pad-right-1">
      <div class="contact-info">
        <h3>Contact Information</h3>
        <div class="contact-item">
          <svg class="contact-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <strong>WhatsApp:</strong> <a :href="`https://wa.me/${whatsappNumber}`" target="_blank">{{ whatsappNumber }}</a>
        </div>
        <div class="contact-item">
          <svg class="contact-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          <strong>LINE ID:</strong> {{ lineId }}
        </div>
        <div class="contact-item">
          <svg class="contact-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          <strong>Phone:</strong> <a :href="`tel:${phoneNumber}`">{{ phoneNumber }}</a>
        </div>
      </div>

      <div class="chat-section">
        <h3>Live Chat</h3>
        <div v-if="!intergramId" class="chat-placeholder">
          <p>Live chat is not configured. Please contact us using the information above.</p>
        </div>
        <div v-else id="intergram-chat-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentDetailModalMixin from '~/core/mixins/layouts/ContentDetailModal'

export default {
  name: 'ChatModal',
  mixins: [ContentDetailModalMixin],
  data() {
    return {
      whatsappNumber: '',
      lineId: '',
      phoneNumber: '',
      intergramId: ''
    }
  },
  methods: {
    initIntergram() {
      if (this.intergramId && typeof window !== 'undefined') {
        window.intergramId = this.intergramId

        const script = document.createElement('script')
        script.id = 'intergram'
        script.type = 'text/javascript'
        script.src = 'https://www.intergram.xyz/js/widget.js'
        document.body.appendChild(script)
      }
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.initIntergram()
    }
  }
}
</script>

<style lang="scss" scoped>
.detailed-content-panel {
  opacity: 1;
  width: 100vw;
  height: calc(100vh - 54px);
  position: fixed;
  top: 100%;
  left: 0;
  z-index: 9993;
  overflow-y: auto;
  overflow-x: hidden;

  .panel-header {
    h2 {
      font-size: 1rem;
    }

    b {
      font-size: 1.2rem;
    }
  }

  .panel-content {
    font-size: 0.875rem;
    position: relative;
    z-index: 1;
    padding-top: 5rem;

    .contact-info {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      margin-bottom: 2rem;
      color: #2c3e50;

      h3 {
        margin-top: 0;
        margin-bottom: 1rem;
        color: #78b7d6;
      }

      .contact-item {
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .contact-icon {
          width: 24px;
          height: 24px;
          fill: #78b7d6;
          flex-shrink: 0;
        }

        a {
          color: #78b7d6;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .chat-section {
      h3 {
        color: white;
        margin-bottom: 1rem;
      }

      .chat-placeholder {
        background: rgba(255, 255, 255, 0.1);
        padding: 2rem;
        border-radius: 8px;
        text-align: center;
        color: white;

        p {
          margin: 0;
        }
      }

      #intergram-chat-container {
        min-height: 400px;
      }
    }
  }
}

@media screen and (min-width: 40em) {
  .detailed-content-panel {
    .panel-header {
      h2 {
        font-size: 1.5rem;
      }

      b {
        font-size: 1.5rem;
      }
    }

    .panel-content {
      font-size: 1rem;
      max-width: 800px;
      margin: 0 auto;
    }
  }
}
</style>
