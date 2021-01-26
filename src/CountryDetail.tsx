import React from 'react';
import { useParams } from 'react-router-dom';

type RouteParams = {
  id: string;
};
const CountryDetail = (): JSX.Element => {
  const { id } = useParams<RouteParams>();

  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
};

export default CountryDetail;
