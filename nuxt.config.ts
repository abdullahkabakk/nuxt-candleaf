// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', 'nuxt-icon', '@nuxt/image', '@formkit/auto-animate/nuxt', '@nuxtjs/i18n'],
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  tailwindcss: {
    configPath: './tailwind.config.js'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-US'
      }
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  }
});
