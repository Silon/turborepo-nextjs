# App Structure

## 📁 Directory Structure

```sh
├── assets
│   ├── svg
│   └── images
├── components
│   ├── atoms
│   ├── layouts
│   ├── molecules
│   ├── organisms
│   ├── pages
│   ├── templates
│   └── utils
├── config
├── contexts
├── helpers
├── hooks
├── modules
│   └── [module-name]
│       └── [...]
├── styles
└── utils
```

## 📁 Directory Structure Description

### assets

This directory contains all assets used in the project. It is divided into two subdirectories: `icons` and `images`.

#### assets/svg

This directory contains all SVG icons used in the project. It should use file names in `kebab-case` format and with `icon` prefix (e.g. `icon-arrow.svg`).

#### assets/images

This directory contains all images used in the project. It should use file names in `kebab-case` format (e.g. `image-name.png`).

### components

This directory contains all **common** components used in the project. Structure of this directory is based on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) but it's extended with nextJS specific components.

#### components/atoms

Basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

#### components/molecules

Groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

#### components/organisms

Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

#### components/pages

This directory contains all pages used in the project. They are used by App Router and exported from `src/app/[...]/page.ts` files.

#### components/templates

This directory contains all templates used in the project. They are used by App Router and exported from `src/app/[...]/template.ts` files.

#### components/utils

This directory contains all utility components used in the project like `AuthGate` or `PrivateRoute`.

### config

This directory contains all configuration files used in the project like `routes.ts` with all routes used in the project or other constants.

### contexts

This directory contains all contexts used in the project. See [Context](../../docs/context.md) for more details.

### helpers

This directory contains all helper functions used in the project. Helpers are pure TS functions that are used in multiple places in the project and **their logic uses business logic.** Difference between helpers and utils is that helpers will not work in other projects because they are using business logic.

### hooks

This directory contains all hooks used in the project. Hooks are part of React and they are used to share logic between components.

### modules

This directory contains all modules used in the project. Modules are used to separate business logic from the rest of the project. Example of module is `auth` module that is responsible for authentication process or `blog` module that is responsible for blog part of website. Modules are divided into subdirectories with module name and inside of them there are all files related only to this module with same structure as in `src/app` directory.

### styles

This directory contains all styles used in the project. Only css files should be placed here.

### utils

This directory contains all utility functions used in the project. Utils are pure TS functions that are used in multiple places in the project and **their logic doesn't use business logic.** Difference between utils and helpers is that utils will work in other projects because they are not using business logic.


