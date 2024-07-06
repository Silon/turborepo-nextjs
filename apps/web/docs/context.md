# Ar Context

## How Ar Context works

Ar Context is composed of two React Contexts that depend on each other. The first one (State) is responsible for storing the state and the second one (Actions) for storing actions that are responsible for modifying its state.

## Logic

### name.context.ts

Main Ar Context file where we store the Context and its Provider. It also contains the Context's state and actions. The state is initialized with the default values.

This file contains `state` variable which is created with `useReducer` hook. The `state` variable is passed to the State Context Provider as a value. The `actions` variable is created with `useMemo` hook and it is passed to the Actions Context Provider as a value.

There are two types of actions: custom and simple. Simple actions are used when we need to modify the state in a simple way (just use dispatch function from state reducer). Custom actions are more complex and to keep the code clean we store them separated from `actionsValue` variable.

**Simple actions** are stored in `actionsValue` because they use only the `dispatch` function from state reducer.

**Custom actions** are stored above the `actionsValue` because they are more complex and need more space to be written.

### name.reducer.ts

This file contains the state reducer. It is used to modify the state. It takes two arguments: `state` and `action`. The `state` is the current state of the Context and `action` is the action that is dispatched from the component.

### name.hooks.ts

This file contains hooks that are used to get the state and actions from the Context. There are two hooks: `useContextNameState` and `useContextNameActions`. The first one is used to get the state and the second one is used to get the actions.

### name.types.ts

This file contains types that are used in the Context.

## How to create Ar Context

Use `pnpm generate` command to create new Context. It will create all necessary files and folders.

## How to use Ar Context

Use `ContextNameProvider` exported from ContextName.context.ts file to wrap your component with the Context Provider and place it where you want to use the Context. Global context should be placed in `src/components/layouts/ArLayoutMain/ArLayoutMain.tsx` file.

Then use `useContextNameState` and `useContextNameActions` hooks to get the state and actions from the Context.
