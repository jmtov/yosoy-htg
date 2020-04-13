import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/screens/home';
import MedicineSelector from './components/screens/medicine-selector';
import Tablet from './components/screens/tablet';
import FoundationsSelector from './components/screens/foundations-selector';
import Scanner from './components/screens/scanner';
import Camara from './components/screens/camara';
import Confirmation from './components/screens/confirmation';

class Main extends React.Component {

  state = {
    idMedicamento: 0,
    cant: 0,
    idFundacion: 0,
    codigo: 0
  }

  medicamentos = (id) => {
    this.setState({ idMedicamento: id });
  }

  fundacion = (id) => {
    this.setState({ idFundacion: id });
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/medicine-selector" render={(props) => <MedicineSelector{...props} medicamentos={this.medicamentos} />} />
          <Route exact path="/tablet" component={Tablet} />
          <Route exact path="/foundations-selector" render={(props) => <FoundationsSelector{...props} fundacion={this.fundacion} />} />
          <Route exact path="/scanner" component={Scanner} />
          <Route exact path="/camara" component={Camara} />
          <Route exact path="/confirmation" component={Confirmation} />
        </Switch>
      </main>
    );
  }
}

export default Main;
