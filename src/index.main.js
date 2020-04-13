import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/screens/desktop/home';
import MedicineSelector from './components/screens/desktop/medicine-selector';
import Tablet from './components/screens/desktop/tablet';
import FoundationsSelector from './components/screens/desktop/foundations-selector';
import Scanner from './components/screens/desktop/scanner';
import Camara from './components/screens/desktop/camara';
import Confirmation from './components/screens/desktop/confirmation';

class Main extends React.Component {
  state = {
    idMedicamento: 0,
    can: 0,
    idFundacion: 0,
    codigo: 0
  }
  medicamentos = (id) => {
    this.setState({ idMedicamento: id });
  }
  fundacion = (id) => {
    this.setState({ idFundacion: id })
  }
  render() {
    console.log(this.state);
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/medicine-selector" component={MedicineSelector} />
          <Route exact path="/tablet" component={Tablet} />
          <Route exact path="/foundations-selector" component={FoundationsSelector} />
          <Route exact path="/scanner" component={Scanner} />
          <Route exact path="/camara" component={Camara} />
          <Route exact path="/confirmation" component={Confirmation} />
        </Switch>
      </main>
    );
  }
}

export default Main;
