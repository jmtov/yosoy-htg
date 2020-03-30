import React from "react";
import { Switch, Route } from "react-router-dom";
import Confirmation from "./components/vistas/confirmation";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Confirmation} />
    </Switch>
  </main>
);

export default Main;
