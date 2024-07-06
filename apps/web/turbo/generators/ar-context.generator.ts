import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("ar-context", {
    description: "crete new context (complex state management)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Context name (kebab-case):",
      },
      {
        type: "input",
        name: "module",
        message: "Module name (leave empty if context is common)",
      },
    ],
    actions: (data) => {
      let path = "";

      if (data?.module) {
        path = `../../../src/modules/${data.module}/state`;
      } else {
        path = `../../../src/state`;
      }

      return [
        {
          type: "add",
          path: `${path}/{{kebabCase name}}/index.ts`,
          templateFile: "./ar-context/index.ts.hbs",
        },
        {
          type: "add",
          path: `${path}/{{kebabCase name}}/types.tsx`,
          templateFile: "./ar-context/types.ts.hbs",
        },
        {
          type: "add",
          path: `${path}/{{kebabCase name}}/context.tsx`,
          templateFile: "./ar-context/context.tsx.hbs",
        },
        {
          type: "add",
          path: `${path}/{{kebabCase name}}/reducer.tsx`,
          templateFile: "./ar-context/reducer.tsx.hbs",
        },
        {
          type: "add",
          path: `${path}/{{kebabCase name}}/hooks.tsx`,
          templateFile: "./ar-context/hooks.tsx.hbs",
        },
      ];
    },
  });
}