import type { VistaraThemes } from './colors'
import { colors } from './colors'

export interface GetThemeOptions {
  color: 'light' | 'dark'
  name: string
  soft?: boolean
  black?: boolean
}

export function createThemeHelpers({ color, name, soft, black }: GetThemeOptions) {
  const pick = (options: { light?: string, dark?: string }) => options[color]
  const v = (key: keyof typeof VistaraThemes, op = '') => {}

  const colors = getColors(color)
  return {
    pick,
    v,
    colors,
  }
}

function getColors(style: 'light' | 'dark'): typeof colors {
  if (style === 'dark') {
    const darkColors: any = {}
    Object.entries(colors).forEach(([name, val]) => {
      if (name === 'black')
        darkColors.white = val
      else if (name === 'white')
        darkColors.black = val
      else
        darkColors[name] = [...toAarray(val)].reverse()
    })
  }
  else
    return colors
}
