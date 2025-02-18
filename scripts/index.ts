import fs from 'fs-extra'
import { getTheme } from './theme'

main()

async function main() {
  console.log('starting extension')
  await fs.mkdir('./themes', { recursive: true })
  Promise.all([
    fs.writeJSON('./themes/vistara-light.json',
      getTheme({
        color: 'light',
        name: 'Vistara Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON('./themes/vistara-dark.json',
      getTheme({
        color: 'dark',
        name: 'Vistara Dark',
      }),
      { spaces: 2 },
    ),
  ])
  console.log('ending extension')
}
