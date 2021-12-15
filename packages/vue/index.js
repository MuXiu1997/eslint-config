const ts = require('@muxiu1997/eslint-config-ts')
const vue = require('@antfu/eslint-config-vue')

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@muxiu1997/eslint-config-ts',
  ],
  overrides: [...vue.overrides, ...ts.overrides],
  rules: vue.rules,
}
