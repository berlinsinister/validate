module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "error",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'comma-dangle': ['error', 'always-multiline'],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    // "vue/no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
  },
};
