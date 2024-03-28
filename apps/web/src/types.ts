export type ArContextAction<T> = {
  type: T;
};

export type ArContextActionWithPayload<T, P> = {
  type: T;
  payload: P;
};
