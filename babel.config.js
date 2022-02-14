module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@core': './src/core',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@layouts': './src/layouts',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@theme': './src/theme',
          '@utilities': './src/utilities',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
