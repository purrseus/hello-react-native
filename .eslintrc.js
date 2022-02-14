module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
        // 'no-console': 'warn',
        // 'no-alert': 'warn',
        // '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        'react-native/no-unused-styles': 'warn',
        'react-native/no-color-literals': 'warn',
        'react-native/no-raw-text': 'error',
        'react-native/no-single-element-style-arrays': 'warn',
        'react-native/no-inline-styles': 'error',
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
};
