import type { ArContextAction, ArContextActionWithPayload } from 'types'

export type ArGlobalStoreState = {
  count: number
}

export type ArGlobalStoreActions = {
  customAction: (payload: number) => void
  increment: () => void
  set: (count: number) => void
}

export type ArGlobalStoreAction =
  | ArContextAction<'increment'>
  | ArContextActionWithPayload<'set', number>
