/** @type {import('prettier').Config} */
const config = {
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  bracketSpacing: false,
  printWidth: 80,

  jsxSingleQuote: false,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/*/(.*)$',
    '^~/*/(.*)$',
    '',
    '^[./]',
  ],
  // importOrderSeparation: true,
  // importOrderSortSpecifiers: true,
  // importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  // importOrderMergeDuplicateImports: true,
  // importOrderCombineTypeAndValueImports: false,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};

export default config;