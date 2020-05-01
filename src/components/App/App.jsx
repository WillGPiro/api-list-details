import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from '../Header.jsx';
import DetailContainer from '../../containers/DetailContainer';
import DetailsContainer from '../../containers/DetailsContainer';

export default function App() {
  return  (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/detail/:name?" component={DetailContainer} />
        <Route exact path="/:page?" component={ DetailsContainer } />
      </Switch>
    </Router>
  );
}
  
