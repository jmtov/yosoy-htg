import React from "react";
import { Switch, Route } from "react-router-dom";
import FoundationsSelector from "./components/vistas/ foundations-selector";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={FoundationsSelector} />
    </Switch>
  </main>
);

export default Main;
