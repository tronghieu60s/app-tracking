module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './app/assets',
          '@const': './app/const',
          '@core': './app/core',

          '@components': './app/main/components',
          '@hooks': './app/main/hooks',
          '@navigation': './app/main/navigation',
          '@reducers': './app/main/reducers',
          '@stacks': './app/main/stacks',

          '@translations': './app/translations',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: true,
        allowUndefined: true,
      },
    ],
  ],
};
