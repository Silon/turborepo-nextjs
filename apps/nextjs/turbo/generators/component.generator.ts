import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('component', {
    description: 'create new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (ArPascalCase):',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select type',
        choices: ['classic-react', 'tailwind-variants'],
      },
      {
        type: 'input',
        name: 'module',
        message: 'Global Module name (leave empty if component is common):',
      },
      {
        type: 'input',
        name: 'group',
        message: 'Components group name (common, utils or your custom name):',
      },
    ],
    actions: (data) => {
      let path = ''

      if (data?.module) {
        path = `../../../src/modules/${data.module}/components`
      }
      else {
        path = `../../../src/components`
      }

      path = `${path}/${data?.group ? `${data?.group}/` : ''}`

      if (data?.type === 'tailwind-variants') {
        return [
          {
            type: 'add',
            path: `${path}{{pascalCase name}}/{{pascalCase name}}.tsx`,
            templateFile: `./tv-component/component.tsx.hbs`,
          },
          {
            type: 'add',
            path: `${path}{{pascalCase name}}/index.ts`,
            templateFile: `./tv-component/index.ts.hbs`,
          },
        ]
      }

      return [
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: `./component/component.tsx.hbs`,
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/index.ts`,
          templateFile: `./component/index.ts.hbs`,
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.types.ts`,
          templateFile: `./component/types.ts.hbs`,
        },
      ]
    },
  })
}
