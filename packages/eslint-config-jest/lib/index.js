module.exports = {
  extends: ["@tylergaffaney/eslint-config", "plugin:jest/recommended"],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },

  rules: {
    "jest/consistent-test-it": [
      "error",
      {
        fn: "it",
        withinDescribe: "it",
      },
    ],
  },
};
