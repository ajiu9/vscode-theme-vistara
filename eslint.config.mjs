// @ts-check
import ajiu9 from '@ajiu9/eslint-config'

export default ajiu9(
  {
    ignores: [
      'src/generated/**',
    ],
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
)
