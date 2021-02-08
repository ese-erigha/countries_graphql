import { State } from '../types';

export enum ActionTypes {
  SELECTED_REGION = 'SELECTED_REGION',
}

interface BaseAction {
  type: ActionTypes;
}

interface UpdateRegionAction extends BaseAction {
  payload: Pick<State, 'selectedRegionId' | 'regions'>;
}
export type Action = UpdateRegionAction;

export const initialState: State = {
  regions: [],
};

export const initState = (state: State) => state;

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SELECTED_REGION':
      return {
        ...state,
        selectedRegionId: action.payload.selectedRegionId,
        regions: action.payload.regions,
      };

    default:
      return { ...state };
  }
};
