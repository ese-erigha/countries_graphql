/* eslint-disable no-console */
import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

const CountryList = (): JSX.Element => {
  const { url } = useRouteMatch();
  return (
    <>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
    </>
  );
};

export default CountryList;
