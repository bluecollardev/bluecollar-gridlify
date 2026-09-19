/**
 * The YAML data files hold the English copy; translations live in
 * src/i18n/locales/*.json. This returns the translation when the locale has
 * one and the YAML text when it does not, so an untranslated string shows
 * English rather than a bare key.
 */
export default {
  methods: {
    tr (key, fallback) {
      const value = this.$t(key)

      return !value || value === key ? fallback : value
    }
  }
}
