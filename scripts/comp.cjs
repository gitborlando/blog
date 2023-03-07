const { mkdirSync, writeFileSync, existsSync } = require('fs')
const { resolve } = require('path')

const path = resolve(__dirname, '..', 'src/comps')
const name = process.argv.slice(2)[0]
const Uname = name[0].toUpperCase() + name.slice(1)

if (existsSync(`${path}\\${name}`)) process.exit(-1)
mkdirSync(`${path}/${name}`)

const tpl = `import { Flex } from '~/widget/flex/flex'
import './${name}.css'

type I${Uname} = {}

export const ${Uname} = ({}: I${Uname}) => {
  return <Flex layout='c' classes='${name}'></Flex>
}
`

const tpl2 = `.${name} {}`

writeFileSync(`${path}/${name}/${name}.tsx`, tpl)
writeFileSync(`${path}/${name}/${name}.css`, tpl2)
