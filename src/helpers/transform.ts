import { Country, SubRegion } from '../types';

export const mapSubRegionToArrayOfCountry = (subRegions: SubRegion[]) => {
  const countries: Country[] = [];
  return subRegions.reduce((acc, subRegion) => [...acc, ...subRegion.countries], countries);
};
