module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    indent: 'off',
    'vue/script-indent': ['warn', 4, {
      baseIndent: 1,
      switchCase: 1,
      ignores: []
    }],
    'vue/html-indent': ['warn', 4],
    'vue/max-attributes-per-line': ['off'],
    semi: ['off']
  }
}
