/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
  },
};
