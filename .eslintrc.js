module.exports = {
  root: true,
  extends: ['plugin:vue-libs/recommended'],
  rules: {
    indent: ['error', 2, { MemberExpression: 'off' }]
  }
}
