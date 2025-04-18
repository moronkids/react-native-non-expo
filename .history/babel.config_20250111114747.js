module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugin: [
    'module-resolver',
    {
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.android.js',
        '.android.tsx',
        '.ios.js',
        '.ios.tsx',
      ],
      root: ['.'],
    },
  ],
};
