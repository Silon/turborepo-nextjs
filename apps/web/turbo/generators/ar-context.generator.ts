import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("ar-context", {
    description: "crete new context (complex state management)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Context name (ArPascalCase):",
      },
      {
        type: "input",
        name: "module",
        message: "Module name (leave empty if context is common)",
      },
    ],
    actions: (data) => {
      let path = "";

      console.log({ __dirname });

      if (data?.module) {
        path = `${__dirname}/../../src/modules/${data.module}/lib/store`;
      } else {
        path = `${__dirname}/../../src/lib/store`;
      }

      return [
        {
          type: "add",
          path: `${path}/{{pascalCase name}}/index.ts`,
          templateFile: "./ar-context/index.ts.hbs",
        },
        {
          type: "add",
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.types.tsx`,
          templateFile: "./ar-context/types.ts.hbs",
        },
        {
          type: "add",
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.context.tsx`,
          templateFile: "./ar-context/context.tsx.hbs",
        },
        {
          type: "add",
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.reducer.tsx`,
          templateFile: "./ar-context/reducer.tsx.hbs",
        },
        {
          type: "add",
          path: `${path}/{{pascalCase name}}/{{pascalCase name}}.hooks.tsx`,
          templateFile: "./ar-context/hooks.tsx.hbs",
        },
      ];
    },
  });
}
