module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:css/recommended',
    'plugin:prettier/recommended',
    'stylelint',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
    'css',
    'unused-imports',
    'prettier',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      caller: {
        // Eslint supports top level await when a parser for it is included. We enable the parser by default for Babel.
        supportsTopLevelAwait: true,
      },
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['@', `${__dirname}/src`]],
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx', '.css'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    {
      files: ['test/**/*.js', 'test/**/*.ts', '**/*.test.ts'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/expect-expect': 'off',
        'jest/no-disabled-tests': 'off',
        'jest/no-conditional-expect': 'off',
        'jest/valid-title': 'off',
        'jest/no-interpolation-in-snapshots': 'off',
        'jest/no-export': 'off',
      },
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: { jest: true },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
        },
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  ],
  ignorePatterns: [
    '/*',
    '!/src',
    '!/test',
    '!/node_modules',
    '!/dist',
    '!/coverage',
    '!/public',
    '!/app',
  ],
  rules: {
    'n/no-missing-import': 'off', // to disable path alias errors
    'node/no-missing-import': 'off', // to disable path alias errors
    'node/no-unpublished-import': 'off', // to disable no unpublished errors

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'prettier/prettier': 'error',

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      'always',
      { ts: 'never', tsx: 'never', js: 'ignorePackages' },
    ],
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',

    'sort-imports': 'off',

    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    // Note: you must disable the base rule as it can report incorrect errors
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
  },
};
