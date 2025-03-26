module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  // parser: 'babel-eslint',
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'unused-imports', 'react'],
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },

  rules: {
    'typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'linebreak-style': 0,
    'max-len': ['error', { code: 200 }],
  },
  ignorePatterns: [
    'node_modules',
    '.history/*',
    'bundle/*',
    'dist/*',
    'build/*',
    'coverage/*',
    'android/*',
    'ios/*',
    '__tests__/*',
    '__mocks__/*',
    'metro.config.js',
    'jest.config.js',
    'app.json',
    'babel.config.js',
    'tsconfig.json',
    '*.mjs',
  ],
};
