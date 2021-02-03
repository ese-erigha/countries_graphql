import { GlobalState } from '../types';

export type Action = {
  type: string;
  payload: Record<string, string>;
};

export const initialState: GlobalState = {
  loading: true,
  regions: [],
  selectedRegion: null,
};

export const reducer = (state: GlobalState, action: Action) => {
  switch (action.type) {
    case 'HELLO':
      return { ...state, loading: true };

    default:
      return { ...state, loading: false };
  }
};
