import { State } from '../types';

export enum ActionTypes {
  FETCHED_REGION = 'FETCHED_REGION',
}

interface BaseAction {
  type: ActionTypes;
}

interface FetchedRegionAction extends BaseAction {
  payload: Pick<State, 'selectedRegion' | 'regions'>;
}
export type Action = FetchedRegionAction;

export const initialState: State = {
  regions: [],
  loading: true,
};

export const initState = (state: State) => state;

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCHED_REGION':
      return {
        ...state,
        selectedRegion: action.payload.selectedRegion,
        regions: action.payload.regions,
        loading: false,
      };

    default:
      return { ...state };
  }
};
