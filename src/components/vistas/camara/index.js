import React from 'react';
import styles from './styles.module.scss';
import Topbar from '../../reusable-components/topbar';
import camara from '../../../assets/camara.png';
import { Link } from 'react-router-dom';
import Button from '../../reusable-components/button';

class Camara extends React.Component {
  render() {
    return (
      <div>
        <Topbar />
        <div className={styles.cam}>
          <img src={camara} alt='camara' />
          <Link to="/confirmation">
            {/*ACA VA EL SIGUIENTE COMPONENTE*/}
            <Button title="CONTINUAR" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Camara;