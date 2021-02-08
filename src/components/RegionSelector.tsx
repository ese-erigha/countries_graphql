/* eslint-disable no-underscore-dangle */
import React, { ChangeEvent, useContext } from 'react';
import { AppContext } from '../state/context';
import { ActionTypes } from '../state/reducer';
import { Region } from '../types';

type Props = {
  regions: Region[];
  selectedRegion: Region;
};

const RegionSelector = (props: Props) => {
  const { dispatch } = useContext(AppContext);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: ActionTypes.SELECTED_REGION,
      payload: { selectedRegionId: event.target.value, regions: props.regions },
    });
  };

  return (
    <>
      <div className="form-group float-right w-250">
        <select
          onChange={(e) => handleChange(e)}
          value={props.selectedRegion._id}
          className="form-select"
        >
          {props.regions.map((region) => (
            <option value={region._id} key={region.name}>
              {region.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default RegionSelector;
