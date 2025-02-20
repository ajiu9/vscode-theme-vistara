import { toArray } from 'comuse-shared'
import { colors, VistaraThemes } from './colors'

export interface GetThemeOptions {
  style: 'light' | 'dark'
  name: string
  soft?: boolean
  black?: boolean
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function createThemeHelpers({ style, soft, black }: GetThemeOptions) {
  const pick = (options: { light?: string, dark?: string }) => options[style]
  const v = (key: keyof typeof VistaraThemes, op = '') => {
    let obj = black
      ? VistaraThemes[`black${capitalize(key)}` as keyof typeof VistaraThemes] || VistaraThemes[key]
      : soft
        ? VistaraThemes[`soft${capitalize(key)}` as keyof typeof VistaraThemes] || VistaraThemes[key]
        : VistaraThemes[key]

    if (typeof obj === 'string')
      obj = [obj, obj]

    return pick({ light: obj[1] + op, dark: obj[0] + op })
  }

  const colors = getColors(style)
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
        darkColors[name] = [...toArray(val)].reverse()
    })
    return darkColors
  }
  else
    return colors
}
