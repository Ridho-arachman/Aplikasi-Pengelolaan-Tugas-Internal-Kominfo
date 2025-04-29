const prettier = require('eslint-plugin-prettier');

module.exports = [
  {
    languageOptions: {
      globals: {
        // Menambahkan globals yang setara dengan `env`
        node: 'readonly',
        es2021: true, // Jika menggunakan fitur ES2021
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
