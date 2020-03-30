import React from "react";
import { Switch, Route } from "react-router-dom";
import Camara from "./components/vistas/camara";


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Camara} />
    </Switch>
  </main>
);

export default Main;
