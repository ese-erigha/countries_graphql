import { useLazyQuery } from '@apollo/react-hooks';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { SEARCH_COUNTRIES_QUERY } from '../api';
import { AppContext } from '../state/context';
import { ActionTypes } from '../state/reducer';
import { ICountries } from '../types';

const SearchBox = () => {
  const [term, setTerm] = useState<string>();
  const { dispatch } = useContext(AppContext);
  const onCompleted = (data: ICountries) => {
    console.log(data.Country);
    dispatch({
      type: ActionTypes.SEARCH_COUNTRY,
      payload: { countryList: data.Country },
    });
  };
  const [searchCountries, { client }] = useLazyQuery<ICountries>(SEARCH_COUNTRIES_QUERY, {
    onCompleted,
    notifyOnNetworkStatusChange: true,
  });

  const performSearch = useCallback(
    (queryString: string) => {
      // Stop previous http request
      client?.stop();
      const variables = { name: queryString };
      // Rerun lazy query again
      searchCountries({ variables });
    },
    [client, searchCountries],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (term) performSearch(term);
    }, 300);
    return () => clearTimeout(timer);
  }, [term, client, searchCountries, performSearch]);
  return (
    <div className="has-icon-left">
      <input
        type="text"
        value={term || ''}
        onChange={(e) => setTerm(e.target.value)}
        className="form-input p-l-3r"
        placeholder="Search for a country"
      />
      <i className="form-icon icon icon-search m-l-1r" />
    </div>
  );
};
export default SearchBox;
