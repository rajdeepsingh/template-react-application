module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',

    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',

    'plugin:import/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['node_modules', 'dist', '.eslintrc.cjs', '.github'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'jsx-a11y',
    'prettier',
    '@typescript-eslint',
    'import',
    'react-refresh',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['./*', '../*'],
            message:
              'Relative imports are not allowed. Use absolute imports instead.',
          },
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
