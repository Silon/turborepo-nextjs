import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('page-layout-template', {
    description: 'create new page, layout or template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name (ArPascalCase):',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select type',
        choices: ['page', 'layout', 'template'],
      },
    ],
    actions: (data) => {
      let path = '../../../src/routes'

      switch (data?.type) {
        case 'layout':
          path = `${path}/layouts/`
          break
        case 'page':
          path = `${path}/pages/`
          break
        case 'template':
          path = `${path}/templates/`
          break
        default:
          path = `${path}/`
          break
      }

      return [
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: `./page-layout/component.tsx.hbs`,
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/index.ts`,
          templateFile: `./page-layout/index.ts.hbs`,
        },
      ]
    },
  })
}
