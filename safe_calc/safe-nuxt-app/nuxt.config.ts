// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '区域火灾风险分析评估系统',
      link: [
        {
          id: 'theme-css',
          rel: 'stylesheet',
          type: 'text/css',
          href: '/themes/lara-light-indigo/theme.css'
        }
      ]
    }
  },
  css: ['primeicons/primeicons.css', 'primeflex/primeflex.scss', 'primevue/resources/primevue.min.css', '@/assets/styles.scss'],
  build: {
    transpile: ['primevue']
  },
  ssr: false,
  vite: {
    vue: {
      reactivityTransform: true
    }
  }
})
