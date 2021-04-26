import settings from './settings'

const appsettings = {
  ...settings.common,
  ...settings[process.env.NODE_ENV],
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    ...appsettings,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - pandaswap',
    title: 'pandaswap',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vee-validate', '~/plugins/axios', '~/plugins/web3.js' ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/proxy',
    '@nuxtjs/sentry',
    '@nuxtjs/auth',
    '@nuxtjs/fontawesome',
    '@nuxtjs/strapi',
    '~/node_modules/nuxt-web3-provider',
    // '~/node_modules/web3modal',
    // '~/node_modules/evm-chains',
  ],
  loading: {
    color: '#33a4dc',
    height: '4px',
  },
  //  default rpc url 
  provider: { rpcUrl: '' },
  // FontAwesome https://github.com/nuxt-community/fontawesome-module
  fontawesome: {},

  // Sentry https://sentry.nuxtjs.org/ https://sentry.io/organizations/safesize/projects/
  // sentry: {
  //   dsn:
  //     'https://13830cae9fce4cf4baf620755d6c3536@o559364.ingest.sentry.io/5694050', // Enter your project's DSN here
  //   config: {
  //     logErrors: true,
  //   }, // Additional config
  // },

  // i18n setup https://i18n.nuxtjs.org/
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.js', dir: 'ltr' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang/',
    vueI18nLoader: true,
  },

  // see Proxy section https://github.com/nuxt-community/proxy-module
  proxy: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: appsettings.apiBaseURL,
    https: appsettings.axios_https,
    rejectUnauthorized: false,
    debug: true,
  },

  // https://dev.auth.nuxtjs.org/
  // auth: {
  //   cookie: {
  //     options: {
  //       expires: 7,
  //     },
  //   },
  //   redirect: {
  //     login: '/login',
  //     logout: '/login',
  //     callback: false,
  //     home: false,
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: 'auth/local',
  //           method: 'post',
  //           propertyName: 'jwt',
  //         },
  //         user: {
  //           url: 'users/me',
  //           method: 'get',
  //           propertyName: false,
  //         },
  //         logout: false,
  //       },
  //     },
  //   },
  // },

  // enable auth middleware globally: https://dev.auth.nuxtjs.org/guide/middleware
  // router: {
  //   middleware: ['auth'],
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
