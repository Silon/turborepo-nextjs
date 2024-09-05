import { useContext } from 'react'
import { ArGlobalStoreActionsContext, ArGlobalStoreStateContext } from './ArGlobalStore.context'

export function useArGlobalStoreState() {
  const context = useContext(ArGlobalStoreStateContext)
  if (context === undefined) {
    throw new Error('useArGlobalStoreStateContext must be used within a ArGlobalStoreProvider')
  }

  return context
}

export function useArGlobalStoreActions() {
  const context = useContext(ArGlobalStoreActionsContext)
  if (context === undefined) {
    throw new Error('useArGlobalStoreActionsContext must be used within a ArGlobalStoreProvider')
  }

  return context
}
