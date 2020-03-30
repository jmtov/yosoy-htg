import React from "react";
import { Switch, Route } from "react-router-dom";

import Scaner from "./components/vistas/scaner";


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Scaner} />
    </Switch>
  </main>
);

export default Main;
