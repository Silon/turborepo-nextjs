import { useContext } from 'react';
import { ArAppContextActions, ArAppContextState } from './ArAppContext.context';

export function useArAppContextState() {
  const context = useContext(ArAppContextState);
  if (context === undefined) {
    throw new Error('useArAppContextState must be used within a ArAppContextProvider');
  }
  return context;
}

export function useArAppContextActions() {
  const context = useContext(ArAppContextActions);
  if (context === undefined) {
    throw new Error('useArAppContextActions must be used within a ArAppContextProvider');
  }
  return context;
}
