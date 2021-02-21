import React, { useContext } from 'react';
import { AppContext } from '../state/context';
import CountryCard from './CountryCard';

const CountryList = (): JSX.Element => {
  const { state } = useContext(AppContext);
  const { loading, selectedRegion, countryList } = state;

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
