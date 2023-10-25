// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', 'nuxt-icon', "@nuxt/image"],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    configPath: './tailwind.config.js'
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  }
})