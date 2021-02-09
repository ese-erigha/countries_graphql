import { useLazyQuery } from '@apollo/react-hooks';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { GET_REGIONS_QUERY } from '../api';
import { AppContext } from '../state/context';
import { ActionTypes } from '../state/reducer';
import { IRegions, Region } from '../types';

const buildQueryParams = (id?: string) => {
  const queryParams = { first: 9, orderBy: ['name_asc'] };
  if (!id) return queryParams;
  return {
    ...queryParams,
    _id: id,
  };
};

const RegionSelector = () => {
  const { dispatch } = useContext(AppContext);
  const [regionList, setRegionList] = useState<Region[]>([]);
  const [selectedRegionId, setSelectedRegionId] = useState<string>();

  const onCompleted = (data: IRegions) => {
    const regions = data!.Region.slice();
    const selectedRegion = regions[0];
    setSelectedRegionId(selectedRegion._id);

    // Initial fetch returns array of region with length more than 1
    // Refetch returns array of region with length 1.  Meaning that select need not repopulated
    if (regions.length > 1) setRegionList(regions);
    dispatch({
      type: ActionTypes.FETCHED_REGION,
      payload: {
        regions,
        selectedRegion,
      },
    });
  };

  const variables = buildQueryParams();
  const [fetchRegions, { loading, refetch }] = useLazyQuery<IRegions>(GET_REGIONS_QUERY, {
    variables,
    onCompleted,
    notifyOnNetworkStatusChange: true,
  });

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    refetch!(buildQueryParams(event.target.value));

  useEffect(() => {
    fetchRegions();
  }, [fetchRegions]);

  return (
    <>
      {(!loading || selectedRegionId) && (
        <div className="form-group float-right w-250">
          <select
            onChange={(e) => handleChange(e)}
            value={selectedRegionId}
            className="form-select"
          >
            {regionList.map((region) => (
              <option value={region._id} key={region.name}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};
export default RegionSelector;
