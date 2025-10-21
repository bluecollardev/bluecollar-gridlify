<template>
  <div class="language-switcher">
    <button
        @click="switchLanguage('en')"
        :class="{ active: currentLocale === 'en' }"
        class="lang-btn"
    >
      EN
    </button>
    <span class="separator">|</span>
    <button
        @click="switchLanguage('th')"
        :class="{ active: currentLocale === 'th' }"
        class="lang-btn"
    >
      TH
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const {locale} = useI18n()

const currentLocale = computed(() => locale.value)

const switchLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
  // Reload the page to ensure all content updates
  window.location.reload()
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
}

.lang-btn {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  transition: opacity 0.2s ease;
  opacity: 0.6;
}

.lang-btn:hover {
  opacity: 1;
}

.lang-btn.active {
  opacity: 1;
  text-decoration: underline;
}

.separator {
  color: #fff;
  opacity: 0.4;
}
</style>
