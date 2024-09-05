/**
 *  i18n helpers
 *
 *  @see https://github.com/infinitered/ignite/blob/master/boilerplate/app/i18n/i18n.ts
 */
export type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (number | string)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (number | string)]

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (number | string)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `.${TKey}` | `['${TKey}']`
  >;
}[keyof TObj & (number | string)]

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string,
> = TValue extends any[]
  ? Text
  : TValue extends object
    ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
    : Text

/**
 *   Ar Context Types
 */
export type ArContextAction<T> = {
  type: T
}

export type ArContextActionWithPayload<T, P> = {
  payload: P
  type: T
}
