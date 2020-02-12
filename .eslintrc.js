module.exports = {
  parser: 'babel-eslint',
  extends: 'standard',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  globals: {
    Phaser: true
  }
};
