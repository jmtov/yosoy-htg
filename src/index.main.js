import React from "react";
import { Switch, Route } from "react-router-dom";

import Tablet from "./components/vistas/tablet";


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Tablet} />
    </Switch>
  </main>
);

export default Main;
