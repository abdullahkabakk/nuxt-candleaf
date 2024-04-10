// https://nuxt.com/docs/api/configuration/nuxt-config
import pages from './locales/pages.json';

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
    '@vee-validate/nuxt',
  ],

  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VForm',
      Field: 'VField',
      FieldArray: 'VFieldArray',
      ErrorMessage: 'VErrorMessage',
    },
  },

  colorMode: {
    classSuffix: ''
  },

  pinia: {
    storesDirs: ['./stores/**']
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    pages: pages
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
