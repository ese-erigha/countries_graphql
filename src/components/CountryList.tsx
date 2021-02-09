import React, { useContext } from 'react';
import { mapSubRegionToArrayOfCountry } from '../helpers/transform';
import { AppContext } from '../state/context';
import CountryCard from './CountryCard';

const CountryList = (): JSX.Element => {
  const { state } = useContext(AppContext);
  const { loading, selectedRegion } = state;

  const countryList = selectedRegion ? mapSubRegionToArrayOfCountry(selectedRegion.subregions) : [];
  return (
    <>
      {!loading && selectedRegion && (
        <div className="container">
          <div className="columns">
            {countryList.map((country) => (
              <CountryCard key={`${country.name}`} region={selectedRegion.name} {...country} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default CountryList;
