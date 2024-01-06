/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)
const componentPath = args[0]

if (!componentPath) {
  console.error('Por favor, forneça um nome para o componente')
  process.exit(1)
}

const pathSegments = componentPath.split('/')
const componentName = pathSegments.pop()
const baseDirectory = path.join(__dirname, 'src', ...pathSegments)
const componentDirectory = path.join(baseDirectory, componentName)

const componentFile = path.join(componentDirectory, `${componentName}.tsx`)
const storyFile = path.join(componentDirectory, `${componentName}.stories.tsx`)

if (!fs.existsSync(componentDirectory)) {
  fs.mkdirSync(componentDirectory, { recursive: true })
}

const componentTemplate = `export interface ${componentName}Props {}

const ${componentName} = () => {
  return <div>${componentName} works!</div>
}

export default ${componentName}
`

const storyTemplate = `import { Meta, StoryFn } from '@storybook/react'
import ${componentName}, {${componentName}Props} from './${componentName}'

const meta: Meta = {
  title: 'Components / ${componentName}',
  component: ${componentName},
}

export default meta

const Template: StoryFn<${componentName}Props> = (args: ${componentName}Props) => <${componentName} {...args} />

export const Default = Template.bind({})
Default.args = {}
`

fs.writeFileSync(componentFile, componentTemplate)
fs.writeFileSync(storyFile, storyTemplate)

console.log(`Componente ${componentName} criado com sucesso.`)
