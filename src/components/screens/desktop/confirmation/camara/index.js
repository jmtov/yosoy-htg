import React from 'react';
import styles from './styles.module.scss';
import Topbar from '../../../reusable-components/topbar';
import camara from '../../../assets/camara.png';
import { Link } from 'react-router-dom';
import Button from '../../../reusable-components/button';
import Confirmation from '../confirmation';

class Camara extends React.Component {
  render() {
    return (
      <div>
        <Topbar link={"/scanner"} />
        <div className={styles.cam}>
          <img src={camara} alt='camara'  className={styles.iconCamara}/>
          <Link to="/confirmation">
            {Confirmation}
            <Button title="CONTINUAR" />
          </Link>
        </div>
        <footer className={styles.footer}>
          <hr className={styles.hrFoot} />
          <p className={styles.textFooter}>Copyright © 2019 YOSOY. Todos los derechos reservados.</p>
        </footer>
      </div>
    );
  }
}

export default Camara;
