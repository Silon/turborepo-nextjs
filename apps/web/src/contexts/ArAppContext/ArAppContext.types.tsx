import { ArContextAction, ArContextActionWithPayload } from "types";

export type ArAppContextStateType = {
  count: number;
};

export type ArAppContextActionsType = {
  increment: () => void;
  set: (count: number) => void;
  customAction: (payload: number) => void;
};

export type ArAppContextAction =
  | ArContextAction<"increment">
  | ArContextActionWithPayload<"set", number>;
