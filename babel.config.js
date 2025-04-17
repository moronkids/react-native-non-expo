module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'], // <- this is the same as the baseUrl
        extensions: ['.ios.ts', '.ios.tsx', '.android.ts', '.android.tsx', '.ts', '.tsx'],
        alias: {
          '@': './src/', // <- this is absolute (different from tsconfig)
        },
      },
    ],
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
