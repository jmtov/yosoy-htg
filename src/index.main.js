import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/vistas/home';
import MedicineSelector from './components/vistas/medicine-selector';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/medicine-selector" component={MedicineSelector} />
    </Switch>
  </main>
);

export default Main;
