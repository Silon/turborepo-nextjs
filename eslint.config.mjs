import antfu from '@antfu/eslint-config'

const ERROR = 2
const WARN = 1

export default antfu({
  react: true,
  rules: {
    '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
    'no-console': WARN,
  },
})
