# Environment Variables

Documentation about environment variables.

### Private environment variables
Private environment variables are stored in the `.env.[...]` files. They are private and should not be pushed to the repository (they are ignored by `.gitignore` file)

### Public environment variables
Public environment variables are stored in the `env/.env.[...]` files. They are public and can be pushed to the repository.

### environment.d.ts
The `environment.d.ts` file contains the list of all environment variables. They are useful for IDEs to provide auto-completion and type checking.

It is automatically generated from the `.env.[...]` and `env/.env.[...]` files by `buildEnvTypeFile.js` script included in `withAppEnvs` function which is used in `next.config.js` file.