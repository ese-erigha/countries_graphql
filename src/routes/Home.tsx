import React from 'react';
import CountryList from '../components/CountryList';
import RegionSelector from '../components/RegionSelector';
import SearchBox from '../components/SearchBox';

const Home = (): JSX.Element => (
  <>
    <div className="container m-t-40">
      <div className="columns">
        <div className="column col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 m-b-20">
          <SearchBox />
        </div>
        <div className="column col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 m-b-20">
          <RegionSelector />
        </div>
      </div>
    </div>
    <CountryList />
  </>
);
export default Home;
