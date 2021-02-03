import { createContext, Dispatch } from 'react';
import { GlobalState } from '../types';
import { Action, initialState } from './reducer';

export const AppContext = createContext<{ state: GlobalState; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});
