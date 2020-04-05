import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/screens/home';
import MedicineSelector from './components/screens/medicine-selector';
import Tablet from './components/screens/tablet';
import FoundationsSelector from './components/screens/foundations-selector';
import Scanner from './components/screens/scanner';
import Camara from './components/screens/camara';
import Confirmation from './components/screens/confirmation';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/medicine-selector" component={MedicineSelector} />
      <Route exact path="/tablet" component={Tablet} />
      <Route exact path="/foundations-selector" component={FoundationsSelector} />
      <Route exact path="/scanner" component={Scanner} />
      <Route exact path="/camara" component={Camara} />
      <Route exact path="/confirmation" component={Confirmation} />
    </Switch>
  </main>
);

export default Main;
