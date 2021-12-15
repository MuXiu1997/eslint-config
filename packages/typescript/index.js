const basic = require('@muxiu1997/eslint-config-basic')
const ts = require('@antfu/eslint-config-ts')

module.exports = {
  extends: [
    '@muxiu1997/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: basic.overrides,
  rules: ts.rules,
}
