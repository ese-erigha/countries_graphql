import React, { useContext } from 'react';
import { AppContext } from '../state/context';

const RegionSelector = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="form-group float-right w-250">
      <select className="form-select">
        <option>Filter by Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
};

export default RegionSelector;
