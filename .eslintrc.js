module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks'],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-import-assign': 'error',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'no-useless-rename': 'error',
    'object-shorthand': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          ['internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': ['error'],
  },
  settings: {
    react: { version: 'detect' },
  },
};
