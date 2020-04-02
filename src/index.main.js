import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/vistas/home';
import MedicineSelector from './components/vistas/medicine-selector';
import Tablet from './components/vistas/tablet';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/medicine-selector" component={MedicineSelector} />
      <Route exact path="/tablet" component={Tablet} />
    </Switch>
  </main>
);

export default Main;
