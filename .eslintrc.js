module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['eslint:wesbos'],
  "rules": {
    "no-param-reassign": "off",
    "func-names": "off",
    "no-undef": "off"
  }
};
