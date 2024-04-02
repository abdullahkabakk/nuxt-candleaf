// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: ''
  },

  pinia: {
    storesDirs: ['./stores/**']
  },

  i18n: {
    vueI18n: './i18n.config.ts'
  },

  imports: {
    dirs: ['src/utils/**', 'src/types/**']
  },

  tailwindcss: {
    configPath: './tailwind.config.ts'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en-US'
      }
    }
  },

  devtools: {
    timeline: {
      enabled: true
    }
  }
});
