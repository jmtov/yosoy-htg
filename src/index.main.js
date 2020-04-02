import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/vistas/home';
import MedicineSelector from './components/vistas/medicine-selector';
import Tablet from './components/vistas/tablet';
import FoundationsSelector from './components/vistas/foundations-selector';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/medicine-selector" component={MedicineSelector} />
      <Route exact path="/tablet" component={Tablet} />
      <Route exact path="/foundations-selector" component={FoundationsSelector} />
    </Switch>
  </main>
);

export default Main;
