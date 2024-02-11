module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['node_modules', 'dist', '.eslintrc.cjs', '.github'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
  },
};
