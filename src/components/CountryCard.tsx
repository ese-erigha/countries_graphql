import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Country } from '../types';

type Props = {
  region: string;
} & Country;

const CountryCard = (props: Props): JSX.Element => {
  const { url } = useRouteMatch();
  return (
    <div className="column col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-3 m-b-20">
      <Link className="disable-link" to={`${url}/{$props.name}`}>
        <div className="card gray-box-shadow m-w-300 m-b-30">
          <div className="card-image">
            <img className="img-responsive" src={props.flag.svgFile} alt="OS X El Capitan" />
            <div className="card-header">
              <div className="card-title h5 bold">{props.name}</div>
            </div>
            <div className="card-body">
              <p className="m-b-1">
                <span className="bold">Population: </span>
                <span>{props.population}</span>
              </p>
              <p className="m-b-1">
                <span className="bold">Region: </span>
                <span>{props.region}</span>
              </p>
              <p className="m-b-1">
                <span className="bold">Capital: </span>
                <span>{props.capital}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default CountryCard;
