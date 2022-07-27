module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [
      2,
      { caseSensitive: false },
    ],
  },
};
