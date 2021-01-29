import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./Home'));
const CountryDetail = lazy(() => import('./CountryDetail'));

const App = (): JSX.Element => (
  <Layout>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/countries" />
          </Route>
          <Route path="/countries" exact component={Home} />
          <Route path="/countries/:id" component={CountryDetail} />
        </Switch>
      </Suspense>
    </Router>
  </Layout>
);

export default App;
