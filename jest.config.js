module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/__mocks__/svgMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|@rneui|@react-navigation)/)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/assets/',
    '<rootDir>/helpers/constant/',
  ],
};
