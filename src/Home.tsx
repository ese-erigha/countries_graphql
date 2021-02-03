import React, { useContext, useEffect } from 'react';
import CountryCard from './components/CountryCard';
import RegionSelector from './components/RegionSelector';
import { AppContext } from './state/context';

const Home = (): JSX.Element => {
  const baseArr: string[] = ['Rendering', 'Components', 'Hooks', 'Props'];
  const arr: string[] = [...baseArr, ...baseArr];
  const { state, dispatch } = useContext(AppContext);

  // Check if region exists in the object
  // If exists, pass to the region selector
  useEffect(() => {
    // if(!state.regions.length)
    //  Fetch Regions; subRegion + countries from API
    // Mark first region as selected
    // Pass selected region and regions to regionSelector
    // Loading = false
  }, [dispatch]);

  return (
    <>
      <div className="container m-t-40">
        <div className="columns">
          <div className="column col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 m-b-20">
            Hello
          </div>
          <div className="column col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 m-b-20">
            <RegionSelector />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          {arr.map((name, index) => (
            <CountryCard key={`${name}`} name={name} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
