import type { GetThemeOptions } from './helper'
import { createThemeHelpers } from './helper'

export function getTheme(options: GetThemeOptions) {
  const { colors } = createThemeHelpers(options)
  console.log(createThemeHelpers(options))
  const theme = {}
  return theme
}
