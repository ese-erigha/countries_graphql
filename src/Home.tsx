import React from 'react';
import CountryCard from './components/CountryCard';
import RegionSelector from './components/RegionSelector';

const Home = (): JSX.Element => {
  const baseArr: string[] = ['Rendering', 'Components', 'Hooks', 'Props'];
  const arr: string[] = [...baseArr, ...baseArr];
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
