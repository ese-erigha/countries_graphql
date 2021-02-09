import React, { useContext } from 'react';
import CountryList from '../components/CountryList';
import RegionSelector from '../components/RegionSelector';
import { AppContext } from '../state/context';

const Home = (): JSX.Element => {
  const { state } = useContext(AppContext);
  const { loading } = state;

  return (
    <>
      <div className="container m-t-40">
        <div className="columns">
          {!loading && (
            <div className="column col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 m-b-20">
              Hello
            </div>
          )}
          <div className="column col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 m-b-20">
            <RegionSelector />
          </div>
        </div>
      </div>
      <CountryList />
    </>
  );
};
export default Home;
