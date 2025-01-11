module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'unused-imports'],
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
