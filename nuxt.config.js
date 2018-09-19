const scrollBehavior = require('./scrollBehavior')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  build: {
    // Generate webpack-bundle-analyzer report
    analyze: {
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: '../report.html'
    },
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            emitWarning: process.env.NODE_ENV !== 'production'
          }
        })
      }
    },
    extractCSS: process.env.NODE_ENV === 'production',
    plugins: [
      // Run stylelint on save
      new StylelintPlugin({
        emitErrors: process.env.NODE_ENV === 'production',
        files: '**/*.{css,vue}',
        formatter: require('stylelint-codeframe-formatter')
      })
    ]
  },
  css: [
    'normalize.css'
  ],
  head: {
    link: [
      { rel: 'icon', href: '/favicon.ico' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'A research project for server side rendering with Nuxt.js' }
    ],
    title: 'Nuxt Research'
  },
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    scrollBehavior
  }
}
