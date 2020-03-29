import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MedicineSelector from './components/vistas/medicine-selector';


const Main = () => (
  <main>
    <Switch>

      <Route exact path="/" component={MedicineSelector} />

    </Switch>
  </main>
);

export default Main;
