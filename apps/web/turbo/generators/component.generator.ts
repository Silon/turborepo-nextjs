import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component", {
    description: "create new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
      {
        type: "input",
        name: "module",
        message: "Module name (leave empty if component is common):",
      },
      {
        type: "list",
        name: "type",
        message: "Select type of the component",
        choices: [
          "atom",
          "molecule",
          "organism",
          "util",
          "template",
          "layout",
          "page",
          "module",
        ],
      },
    ],
    actions: (data) => {
      let path = "";

      if (data && data.module) {
        path = `../../../src/modules/${data.module}/components`;
      } else {
        path = `../../../src/components`;
      }

      switch (data?.type) {
        case "atom":
          path = `${path}/atoms/`;
          break;
        case "molecule":
          path = `${path}/molecules/`;
          break;
        case "organism":
          path = `${path}/organisms/`;
          break;
        case "module":
          path = `${path}/modules/`;
          break;
        case "template":
          path = `${path}/templates/`;
          break;
        case "util":
          path = `${path}/utils/`;
          break;
        case "layout":
          path = `${path}/layouts/`;
          break;
        case "page":
          path = `${path}/pages/`;
          break;
        default:
          path = `${path}/`;
          break;
      }

      const actions = [
        {
          type: "add",
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: `./component/component.tsx.hbs`,
        },
        {
          type: "add",
          path: `${path}{{pascalCase name}}/index.ts`,
          templateFile: `./component/index.ts.hbs`,
        },
        {
          type: "add",
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.types.ts`,
          templateFile: `./component/types.ts.hbs`,
        },
      ];

      return actions;
    },
  });
}
