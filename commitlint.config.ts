export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [0, 'never'],
    'scope-empty': [0, 'never'],
  },
}
