import React from 'react';
import { withRouter } from 'react-router-dom';
import Topbar from '../../reusable-components/topbar';
import ContainerCard from './container-card';
import Button from '../../reusable-components/button';
import styles from './styles.module.scss';
import FoundationsSelector from '../foundations-selector/';

class Tablet extends React.Component {



  submit = (e) =>{
    e.preventDefault();
    this.props.history.push("/foundations-selector");
  }


  render() {
    return (
      <div>
        <Topbar link={"medicine-selector"} />
        <form onSubmit={this.submit} className={styles.container}>
          <ContainerCard />
        
          <Button title="CONTINUAR"/>
        </form>
      </div>
    );
  }
}

export default withRouter(Tablet);
