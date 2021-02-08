import React from 'react';
import { mapSubRegionToArrayOfCountry } from '../helpers/transform';
import { Region } from '../types';
import CountryCard from './CountryCard';

type Props = {
  selectedRegion: Region;
};

const CountryList = (props: Props): JSX.Element => {
  const { selectedRegion } = props;
  const countryList = mapSubRegionToArrayOfCountry(selectedRegion.subregions);
  return (
    <>
      <div className="container">
        <div className="columns">
          {countryList.map((country) => (
            <CountryCard key={`${country.name}`} region={selectedRegion.name} {...country} />
          ))}
        </div>
      </div>
    </>
  );
};
export default CountryList;
