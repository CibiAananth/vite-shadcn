// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  printWidth: 80,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',

  importOrder: [
    '',
    '<BUILT_IN_MODULES>',
    '',
    '^(react/(.*)$)|^(react$)|^(react-(.*)$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/registry/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '',
    '^.*\\.s?css$', // Match any import that ends with .css or .scss
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderSeparation: true,
  importOrderTypeScriptVersion: '>=5.0.0',

  tailwindConfig: './tailwind.config.js',
  tailwindFunctions: ['clsx', 'cva', 'tw'],

  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  pluginSearchDirs: false, // needed for tailwindcss plugin
};
