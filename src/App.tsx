import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import AppContextProvider from './AppContextProvider';

const Home = lazy(() => import('./Home'));
const CountryDetail = lazy(() => import('./CountryDetail'));

const App = (): JSX.Element => (
  <Layout>
    <AppContextProvider>
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
    </AppContextProvider>
  </Layout>
);

export default App;
