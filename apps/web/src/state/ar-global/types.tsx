import type { ArContextAction, ArContextActionWithPayload } from "types";

export type ArGlobalStateType = {
  count: number;
};

export type ArGlobalStateActionsType = {
  customAction(payload: number): void;
  increment(): void;
  set(count: number): void;
};

export type ArGlobalStateAction = 
  | ArContextAction<"increment">
  | ArContextActionWithPayload<"set", number>;