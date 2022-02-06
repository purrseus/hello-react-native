module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app': './src/app',
          '@assets': './src/assets',
          '@components': './src/components',
          '@containers': './src/containers',
          '@core': './src/core',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@theme': './src/theme',
          '@utilities': './src/utilities',
        },
      },
    ],
  ],
};
