"use client";

import { createContext, useMemo, useReducer } from "react";
import { arAppContextReducer } from "./ArAppContext.reducer";
import type {
  ArAppContextActionsType,
  ArAppContextStateType,
} from "./ArAppContext.types";

/**
 *
 * Separated into two contexts to avoid unnecessary re-renders
 * when only one of the contexts changes.
 *
 * See: https://kentcdodds.com/blog/how-to-optimize-your-context-value
 */
export const ArAppContextState = createContext<ArAppContextStateType>(
  {} as ArAppContextStateType,
);
export const ArAppContextActions = createContext<ArAppContextActionsType>(
  {} as ArAppContextActionsType,
);

/**
 * Initial state
 *
 * This is used to initialize the state of the context.
 */
const INITIAL_STATE = {
  count: 0,
};

/**
 *
 * ArAppContextProvider
 *
 * This is the provider for the ArAppContext.
 */
export function ArAppContextProvider({
  children,
  initialState = INITIAL_STATE,
}: {
  readonly children: React.ReactNode;
  readonly initialState?: ArAppContextStateType;
}) {
  /**
   * useReducer
   *
   * Context state reducer
   */
  const [state, dispatch] = useReducer(arAppContextReducer, {
    ...initialState,
  });

  /**
   *
   * customAction
   *
   * This is an example of a custom action.
   */
  const customAction = async (payload: number) => {
    dispatch({ type: "set", payload });
    await new Promise((resolve) => {
      setTimeout(resolve, 1_000);
    });
    dispatch({ type: "increment" });
  };

  /**
   *
   * actionsValue
   *
   * This is the value of the actions context.
   */
  const actionsValue = useMemo(
    (): ArAppContextActionsType => ({
      increment: () => dispatch({ type: "increment" }),
      set: (payload: number) => dispatch({ type: "set", payload }),
      customAction,
    }),
    [],
  );

  /**
   *
   * This is the value of the state context.
   *
   * See: https://kentcdodds.com/blog/how-to-optimize-your-context-value
   */
  return (
    <ArAppContextState.Provider value={state}>
      <ArAppContextActions.Provider value={actionsValue}>
        {children}
      </ArAppContextActions.Provider>
    </ArAppContextState.Provider>
  );
}
