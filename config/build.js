import stylelintCodeframeFormatter from 'stylelint-codeframe-formatter'
import StylelintPlugin from 'stylelint-webpack-plugin'

export default {
  // Generate webpack-bundle-analyzer report
  analyze: {
    analyzerMode: 'static',
    openAnalyzer: false
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
      formatter: stylelintCodeframeFormatter
    })
  ]
}
