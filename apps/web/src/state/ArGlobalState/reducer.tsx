import type { ArGlobalStateAction, ArGlobalStateType } from "./types";

export function arGlobalStateReducer(
  state: ArGlobalStateType,
  action: ArGlobalStateAction,
) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "set":
      return { count: action.payload };
    default:
      throw new Error("Unhandled action type");
  }
}
