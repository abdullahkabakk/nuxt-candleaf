// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', 'nuxt-icon', "@nuxt/image", '@formkit/auto-animate/nuxt'],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    configPath: './tailwind.config.js'
  },
  app:{
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
})