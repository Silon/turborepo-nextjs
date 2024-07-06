import { createContext, useMemo, useReducer } from "react";
import { arGlobalStateReducer } from "./reducer";
import type { ArGlobalStateActionsType, ArGlobalStateType } from "./types";

/**
 *
 * Separated into two contexts to avoid unnecessary re-renders
 * when only one of the contexts changes.
 *
 * See: https://kentcdodds.com/blog/how-to-optimize-your-context-value
 */
export const ArGlobalState = createContext<ArGlobalStateType>({} as ArGlobalStateType);
export const ArGlobalStateActions = createContext<ArGlobalStateActionsType>({} as ArGlobalStateActionsType);

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
 * ArGlobalStateProvider
 *
 * This is the provider for the ArGlobal.
 */
export function ArGlobalStateProvider({
  children,
  initialState = INITIAL_STATE,
}: {
  readonly children: React.ReactNode;
  readonly initialState?: ArGlobalStateType;
}) {
  /**
   * useReducer
   *
   * Context state reducer
   */
  const [state, dispatch] = useReducer(arGlobalStateReducer, {
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
    (): ArGlobalStateActionsType => ({
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
    <ArGlobalState.Provider value={state}>
      <ArGlobalStateActions.Provider value={actionsValue}>{children}</ArGlobalStateActions.Provider>
    </ArGlobalState.Provider>
  );
}
