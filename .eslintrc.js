module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:cypress/recommended'],
  plugins: ['prettier', 'cypress'],
  env: {
    'cypress/globals': true
  },
  rules: {
    'prettier/prettier': ['error']
  }
};
