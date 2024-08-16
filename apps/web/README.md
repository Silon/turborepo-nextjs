## App Structure

```sh
├── app
├── assets
│   ├── svg
│   └── images
├── components
│   ├── common
│   └── utils
├── lib
│   ├── helpers
│   ├── hooks
│   └── utils
├── routes
│   ├── layouts
│   ├── pages
│   └── templates
├── state
├── modules
│   └── [module-name]
│       └── [...]
└── styles
```

**app**

Contains Next.js specific router files. It should only contain the routing logic and represent the structure of the app. All pages, layouts, and templates should be placed in the routes folder.

**assets**

Contains all the static assets like images, fonts, and SVGs.

**components**

Contains all the reusable components. Here you can create directories for business or ui modules and place all the related components in that directory like `components/auth`, `components/blog`, etc.

**components/common**

Contains all the common components that can be used across the app. For example forms wrapper, generic components, etc.

**components/utils**

Contains all the utility components like auth gate, error boundary, etc.

**lib**

Contains all the utility functions, hooks, and helpers.

**lib/hooks**

Contains all the custom hooks. Custom hooks are the hooks that are used across the app and are not related to any specific module.

**lib/helpers**

Contains all the helper functions. Helper functions are the functions that are used across the app and are not related to any specific module.

**lib/utils**

Contains all the utility functions. Utility functions are the functions that are used across the app and are not related to any specific module.

**Note: The difference between helpers and utils is that helpers are more specific to the app (include business logic, e.g. price calculation) and utils are more generic (e.g. deep cloning).**

**routes**

Contains components of all the pages, layouts, and templates. They are imported in the app folder.

**state**

Contains all the global state management logic. You can use any state management library like Redux, Recoil, Zustand or stay with React Context API.

**modules**

Contains all the feature modules. Each module should have its own folder with all the related components, hooks, and utils.

**styles**

Contains all the global styles.

## Others

#### Envs Types File

File `environment.d.ts` is automatically generated from `.env` files in the root of the project, after run `dev` command.
