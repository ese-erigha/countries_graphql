
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import capitan from './images/osx-el-capitan.jpg';

type Props = {
  name: string;
}

const CountryCard = (props: Props): JSX.Element =>{
    const { url } = useRouteMatch();
    return (
        <div className="column col-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 m-b-20">
        <div className="card gray-box-shadow">
                  <div className="card-image"><img className="img-responsive" src={capitan} alt="OS X El Capitan"/>
                  <div className="card-header">
                    <div className="card-title h5">{props.name}</div>
                  </div>
                  <div className="card-body">
                    <p className="m-b-1">
                      <span className="bold">Population: </span>
                      <span>81,770,900</span>
                    </p>
                    <p className="m-b-1">
                      <span className="bold">Region: </span>
                      <span>Europe</span>
                    </p>
                    <p className="m-b-1">
                      <span className="bold">Capital: </span>
                      <span>Berlin</span>
                    </p>
                  </div>
                </div>
        </div>
      </div>
    );
};
export default CountryCard;