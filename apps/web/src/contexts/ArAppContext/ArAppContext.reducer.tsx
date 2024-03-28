import { ArAppContextAction, ArAppContextStateType } from './ArAppContext.types';

export function arAppContextReducer(state: ArAppContextStateType, action: ArAppContextAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'set':
      return { count: action.payload };
    default:
      throw new Error();
  }
}
