import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/vistas/home';
import MedicineSelector from './components/vistas/medicine-selector';
import Tablet from './components/vistas/tablet';
import FoundationsSelector from './components/vistas/foundations-selector';
import Scaner from './components/vistas/scaner';
import Camara from './components/vistas/camara';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/medicine-selector" component={MedicineSelector} />
      <Route exact path="/tablet" component={Tablet} />
      <Route exact path="/" component={FoundationsSelector} />
      <Route exact path="/scaner" component={Scaner} />
      <Route exact path="/camara" component={Camara} />
    </Switch>
  </main>
);

export default Main;
