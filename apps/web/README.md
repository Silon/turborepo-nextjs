## Scripts

```sh
# Start developing
dev

# Lint code with ESLint
lint

# Preview app (build and start)
preview

# Analyze bundle size
analyze

# Build production app
build

# Start production app
start

# Create new component or context
generate

# Create sitemap
sitemap
```

## Conventional Commits

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to standardize commit messages.

You can add the <a href="https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits">Conventional Commits</a> plugin to your VSCode and make life easier!

## App Structure

[Read about app structure](../../blob/master/apps/web/docs/app-structure.md)

## Contexts

[Read about contexts](../../blob/master/apps/web/docs/context.md)


## Others

#### Envs Types File 
File `environment.d.ts` is automatically generated from `.env` files in the root of the project, after run `dev` command.
