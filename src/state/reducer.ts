import { mapSubRegionToArrayOfCountry } from '../helpers/transform';
import { State } from '../types';

export enum ActionTypes {
  FETCHED_REGION = 'FETCHED_REGION',
  SEARCH_COUNTRY = 'SEARCH_COUNTRY',
}

interface BaseAction {
  type: ActionTypes;
}

interface FetchedRegionAction extends BaseAction {
  payload: Pick<State, 'selectedRegion' | 'regions'>;
}

interface SearchCountryAction extends BaseAction {
  payload: Pick<State, 'countryList'>;
}

export type Action = FetchedRegionAction | SearchCountryAction;

export const initialState: State = {
  regions: [],
  loading: true,
  countryList: [],
};

export const initState = (state: State) => state;

const fetchedRegion = (state: State, action: FetchedRegionAction) => {
  const { selectedRegion, regions } = action.payload;
  return {
    ...state,
    selectedRegion,
    regions,
    loading: false,
    countryList: mapSubRegionToArrayOfCountry(selectedRegion!.subregions),
  };
};

const searchCountries = (state: State, action: SearchCountryAction) => {
  const { countryList } = action.payload;
  return {
    ...state,
    countryList: countryList.length
      ? countryList
      : mapSubRegionToArrayOfCountry(state.selectedRegion!.subregions),
  };
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCHED_REGION':
      return fetchedRegion(state, action as FetchedRegionAction);

    case 'SEARCH_COUNTRY':
      return searchCountries(state, action as SearchCountryAction);

    default:
      return { ...state };
  }
};
