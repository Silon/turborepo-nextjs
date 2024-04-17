import type { ArContextAction, ArContextActionWithPayload } from "types";

export type ArAppContextStateType = {
  count: number;
};

export type ArAppContextActionsType = {
  customAction(payload: number): void;
  increment(): void;
  set(count: number): void;
};

export type ArAppContextAction =
  | ArContextAction<"increment">
  | ArContextActionWithPayload<"set", number>;
