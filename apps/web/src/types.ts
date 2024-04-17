export type ArContextAction<T> = {
  type: T;
};

export type ArContextActionWithPayload<T, P> = {
  payload: P;
  type: T;
};
