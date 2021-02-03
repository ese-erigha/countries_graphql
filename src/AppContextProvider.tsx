import React, { ReactNode, useReducer } from 'react';
import { AppContext } from './state/context';
import { initialState, reducer } from './state/reducer';

type Props = {
  children: ReactNode;
};

const AppContextProvider = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
