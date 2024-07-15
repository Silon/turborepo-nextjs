import browser from "eslint-config-neon/flat/browser.js";
import common from "eslint-config-neon/flat/common.js";
import edge from "eslint-config-neon/flat/edge.js";
import next from "eslint-config-neon/flat/next.js";
import node from "eslint-config-neon/flat/node.js";
import prettier from "eslint-config-neon/flat/prettier.js";
import react from "eslint-config-neon/flat/react.js";
import typescript from "eslint-config-neon/flat/typescript.js";
import merge from "lodash.merge";
import tseslint from "typescript-eslint";

const commonFiles = "{js,mjs,cjs,ts,mts,cts,jsx,tsx}";
const reactFiles = "{js,ts,jsx,tsx}";

// Basic Rules
const commonRules = merge(...common, { files: [`**/*${commonFiles}`] });
const nodeRules = merge(...node, { files: [`**/*${commonFiles}`] });
const edgeRules = merge(...edge, { files: [`**/*${commonFiles}`] });
const nextRules = merge(...next, { files: [`apps/**/*${commonFiles}`] });
const browserRules = merge(...browser, { files: [`**/*${commonFiles}`] });
const prettierRules = merge(...prettier, { files: [`**/*${commonFiles}`] });

// React
const reactRules = merge(...react, {
  files: [`apps/web/src/**/*${reactFiles}`, `packages/ui/**/*${reactFiles}`],
  rules: {
    "@next/next/no-html-link-for-pages": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    // No unused vars in React components
    "react/jsx-uses-vars": 1,
  },
});

// Typescript
const typeScriptRules = merge(...typescript, {
  files: [`**/*${commonFiles}`],
  ignores: ["**/next-env.d.ts"],
  languageOptions: {
    parserOptions: {
      warnOnUnsupportedTypeScriptVersion: false,
      allowAutomaticSingleRunInference: true,
      project: [
        "tsconfig.eslint.json",
        "apps/*/tsconfig.eslint.json",
        "packages/*/tsconfig.eslint.json",
        "config/*/tsconfig.eslint.json",
      ],
    },
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": [2, "type"],
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: [
          "tsconfig.eslint.json",
          "apps/*/tsconfig.eslint.json",
          "packages/*/tsconfig.eslint.json",
          "config/*/tsconfig.eslint.json",
        ],
      },
    },
  },
});

// Custom Project Overrides
const overrides = {
  rules: {
    "tsdoc/syntax": 0,
    "unicorn/no-abusive-eslint-disable": 0,
    "id-length": 0,
  },
};

export default tseslint.config(
  {
    ignores: [".git/", "**/node_modules/", "**/dist/", "**/.next/"],
  },
  commonRules,
  browserRules,
  nodeRules,
  typeScriptRules,
  reactRules,
  nextRules,
  edgeRules,
  prettierRules,
  // Overrides for project specific rules:
  overrides
);
