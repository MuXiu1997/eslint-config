module.exports = {
  extends: [
    '@antfu/eslint-config-basic',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/order': [
      'error',
      {
        'groups': [
          'index',
          'sibling',
          'parent',
          'internal',
          'external',
          'builtin',
          'object',
          'unknown',
          'type',
        ],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
        },
      },
    ],
  },
}
