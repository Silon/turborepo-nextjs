# Components Generator

### Component

#### Usage

You can create new component using this command:

```sh
pnpm generate
```

#### Generator Steps

1. **Name** (required) - name of the component with app prefix (e.g. `ArButton`)

2. **Module** (optional) - module name (e.g. `blog`) - it will use or create `modules/blog` directory and put component there (optional)

3. **Type** (required) - select one of the list of predefined component types. It will use or create specific directory and put component there. Structure is based on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

### Context

#### Usage

You can create new context using this command:

```sh
pnpm generate
```

#### Generator Steps

1. **Name** (required) - name of the context with app prefix (e.g. `ArBlogContext`)

2. **Module** (optional) - module name (e.g. `blog`) - it will use or create `modules/blog` directory and put context there