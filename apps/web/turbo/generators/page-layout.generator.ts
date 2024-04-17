import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("page-or-layout", {
    description: "create new page or layout",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name:",
      },
      {
        type: "list",
        name: "type",
        message: "Select type",
        choices: ["page", "layout"],
      },
    ],
    actions: (data) => {
      let path = "../../../src/components";

      switch (data?.type) {
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

      return [
        {
          type: "add",
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: `./page-layout/component.tsx.hbs`,
        },
        {
          type: "add",
          path: `${path}{{pascalCase name}}/index.ts`,
          templateFile: `./page-layout/index.ts.hbs`,
        },
      ];
    },
  });
}
