/* eslint-disable no-console */
import { useQuery } from '@apollo/react-hooks';
import React, { useContext } from 'react';
import { GET_REGIONS_QUERY } from '../api';
import CountryList from '../components/CountryList';
import RegionSelector from '../components/RegionSelector';
import { AppContext } from '../state/context';
import { IRegions } from '../types';

const buildQueryParams = (id?: string) => {
  const queryParams = { first: 9, orderBy: ['name_asc'] };
  if (!id) return queryParams;
  return {
    ...queryParams,
    _id: id,
  };
};

const Home = (): JSX.Element => {
  const { state } = useContext(AppContext);
  const variables = buildQueryParams(state.selectedRegionId);
  const { loading, data, error } = useQuery<IRegions>(GET_REGIONS_QUERY, { variables });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const regions = data!.Region.slice();
  const selectedRegion = regions[0];
  const selectorRegion = state.selectedRegionId ? state.regions : regions;

  return (
    <>
      <div className="container m-t-40">
        <div className="columns">
          <div className="column col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 m-b-20">
            Hello
          </div>
          <div className="column col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 m-b-20">
            <RegionSelector regions={selectorRegion} selectedRegion={selectedRegion} />
          </div>
        </div>
      </div>
      <CountryList selectedRegion={selectedRegion} />
    </>
  );
};
export default Home;
