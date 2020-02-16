module.exports = {
  parser: 'babel-eslint',
  extends: 'standard',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  globals: {
    Phaser: true,
  },
  settings: {
    'import/core-modules': ['phaser'],
    'import/parser': 'webpack',
  },
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [2, 'always'],
    'space-before-function-paren': 'off',
    'no-new': 0,
  },
};
