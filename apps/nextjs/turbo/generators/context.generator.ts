import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('context', {
    description: 'create new basic context',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Context name (ArPascalCase):',
      },
      {
        type: 'input',
        name: 'module',
        message: 'Module name (leave empty if context is common)',
      },
    ],
    actions: (data) => {
      let path = ''

      if (data?.module) {
        path = `../../../src/modules/${data.module}/state`
      }
      else {
        path = `../../../src/state`
      }

      return [
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/index.ts`,
          templateFile: './context/index.ts.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/context.tsx`,
          templateFile: './context/context.tsx.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}/hooks.tsx`,
          templateFile: './context/hooks.ts.hbs',
        },
      ]
    },
  })
}
