/**
 * Intergrade Prettier to EsLint
 *
 * @see https://github.com/prettier/eslint-plugin-prettier
 */

module.exports = {
  extends: [
    // Disable code style rules of `EsLint`, which should be handled by `Prettier`
    "prettier",
  ],

  plugins: [
    // Use `eslint-plugin-prettier` to intergrade prettier to eslint workflow
    "prettier",
    "simple-import-sort"
  ],

  // Rules overrides
  rules: {
    "prettier/prettier": "error",
    "singleQuote": true,
    "quoteProps": "as-needed"
  },
};
