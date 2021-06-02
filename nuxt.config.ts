import { Configuration } from '@nuxt/types';

const nuxtConfig: Configuration = {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DEREN\'s Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DERENのPortfolio🐶' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://derennoportfolio.web.app/' },
      { hid: 'og:title', property: 'og:title', content: 'DEREN\'s Portfolio' },
      { hid: 'og:description', property: 'og:description', content: 'DERENのPortfolio🐶' },
      { hid: 'og:image', property: 'og:image', content: '/favicon.ico' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'DERENのPortfolio🐶' },
      { hid: 'language', property: 'language', content: 'Japanese' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'normalize.css',
    '~/assets/scss/base.scss'
  ],

  styleResources: {
    scss: ['~/assets/scss/variables.scss']
    // less: [],
    // stylus: []
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/environments.ts' },
    { src: '~/plugins/axios/axios-interceptor.ts' },
    { src: '~/plugins/firebase.ts' },
    { src: '~/plugins/gtag.js' },
    { src: '~/plugins/swiper.js', mode: 'client' },
    { src: '~/plugins/vue-aos.js', mode: 'client' },
    { src: '~/plugins/v-scroll-lock.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    'nuxt-typed-vuex'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config: any) {
      config.node = {
        fs: 'empty'
      };
    },
    postcss: {
      preset: {
        autoprefixer: { grid: 'autoplace' }
      }
    },
    transpile: [
      /typed-vuex/
    ]
  },

  /*
  ** Typescript options
  */
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  }
};

export default nuxtConfig;
