import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Layout from './components/Layout';

const CountryList = lazy(() => import('./CountryList'));
const CountryDetail = lazy(() => import('./CountryDetail'));

const App = (): JSX.Element => {
  return (
    <Layout>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/countries" />
            </Route>
            <Route path="/countries" exact component={CountryList} />
            <Route path="/countries/:id" component={CountryDetail} />
          </Switch>
        </Suspense>
      </Router>
    </Layout>
  );
};

export default App;
