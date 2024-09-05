'use client'

import { createContext, useMemo, useReducer } from 'react'
import { arGlobalStoreReducer } from './ArGlobalStore.reducer'
import type {
  ArGlobalStoreActions,
  ArGlobalStoreState,
} from './ArGlobalStore.types'

export const ArGlobalStoreStateContext = createContext<ArGlobalStoreState>(
  {} as ArGlobalStoreState,
)
export const ArGlobalStoreActionsContext = createContext<ArGlobalStoreActions>(
  {} as ArGlobalStoreActions,
)

const INITIAL_STATE = {
  count: 0,
}

export function ArGlobalStoreProvider({
  children,
  initialState = INITIAL_STATE,
}: {
  readonly children: React.ReactNode
  readonly initialState?: ArGlobalStoreState
}) {
  const [state, dispatch] = useReducer(arGlobalStoreReducer, {
    ...initialState,
  })

  const customAction = async (payload: number) => {
    dispatch({ type: 'set', payload })
    await new Promise((resolve) => {
      setTimeout(resolve, 1_000)
    })
    dispatch({ type: 'increment' })
  }

  const actionsValue = useMemo(
    (): ArGlobalStoreActions => ({
      increment: () => dispatch({ type: 'increment' }),
      set: (payload: number) => dispatch({ type: 'set', payload }),
      customAction,
    }),
    [],
  )

  return (
    <ArGlobalStoreStateContext.Provider value={state}>
      <ArGlobalStoreActionsContext.Provider value={actionsValue}>
        {children}
      </ArGlobalStoreActionsContext.Provider>
    </ArGlobalStoreStateContext.Provider>
  )
}
