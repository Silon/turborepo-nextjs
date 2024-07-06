import { useContext } from "react";
import { ArGlobalStateActions, ArGlobalState } from "./context";

export function useArGlobalState() {
  const context = useContext(ArGlobalState);
  if (context === undefined) {
    throw new Error("useArGlobalState must be used within a ArGlobalProvider");
  }

  return context;
}

export function useArGlobalStateActions() {
  const context = useContext(ArGlobalStateActions);
  if (context === undefined) {
    throw new Error("useArGlobalStateActions must be used within a ArGlobalStateProvider");
  }

  return context;
}
