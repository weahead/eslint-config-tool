module.exports = {
  parserOptions: {
    ecmaVersion: 8,
  },
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      // "extends": ["plugin:jest/recommended"]
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
};
