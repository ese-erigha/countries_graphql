import React from 'react';
import CountryCard from './CountryCard';

const CountryList = (): JSX.Element => {
  const arr: string[] = ['rendering','components','props-v-state'];
  return (
    <div className="container m-t-40">
      <div className="columns">
        {arr.map((name)=> (<CountryCard name={name}/>))}
          {/* <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul> */}
      </div>
    </div>
  );
};

export default CountryList;
