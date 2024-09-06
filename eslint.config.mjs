import tailwind from 'eslint-plugin-tailwindcss'
import antfu from '@antfu/eslint-config'

const ERROR = 2
const WARN = 1

export default antfu(
/**
 *
 *  Base Config
 *
 */
  {
    react: true,
    typescript: true,
    rules: {
      '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
      'no-console': WARN,
    },
  },
  /**
   *
   * Tailwind Config
   *
   */
  ...tailwind.configs['flat/recommended'],
  /**
   *
   * UI Components
   * packages/ui
   *
   */
  {
    files: ['packages/ui/**/*.{js,ts,jsx,tsx}'],
    settings: {
      tailwindcss: {
        config: './config/tailwind-config/base.js',
      },
    },
    rules: {
      'tailwindcss/no-custom-classname': [WARN, {
        config: './config/tailwind-config/base.js',
        whitelist: ['(.*)\\-ar\\-(.*)'],
      }],
    },
  },
  /**
   *
   * Next.js
   * apps/nextjs
   *
   */
  {
    files: ['apps/nextjs/**/*.{js,ts,jsx,tsx}'],
    settings: {
      tailwindcss: {
        config: './apps/nextjs/tailwind.config.js',
      },
    },
    rules: {
      'tailwindcss/no-custom-classname': [WARN, {
        config: './apps/nextjs/tailwind.config.js',
        whitelist: ['(.*)\\-ar\\-(.*)'],
      }],
    },
  },
)
