import type { ArGlobalStoreAction, ArGlobalStoreState } from './ArGlobalStore.types'

export function arGlobalStoreReducer(state: ArGlobalStoreState, action: ArGlobalStoreAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'set':
      return { count: action.payload }
    default:
      throw new Error('Unhandled action type')
  }
}
