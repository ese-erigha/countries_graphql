import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AppContextProvider from './AppContextProvider';
import Layout from './components/Layout';

const Home = lazy(() => import('./routes/Home'));
const CountryDetail = lazy(() => import('./routes/CountryDetail'));

const App = (): JSX.Element => (
  <AppContextProvider>
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
  </AppContextProvider>
);

export default App;
