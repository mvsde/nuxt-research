module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "vue/require-default-prop": false,
    "vue/html-closing-bracket-newline": ['error', {
      singleline: 'never',
      multiline: 'always'
    }]
  }
}
