import React from 'react';
import styles from './styles.module.scss';
import camara from '../../../assets/camara.png';
import { Link } from 'react-router-dom';
import back from '../../../assets/back.png';
import logo from '../../../assets/logo.png';
import { withRouter } from 'react-router-dom';

class Camara extends React.Component {
  submit = (e) => {
    e.preventDefault();
    this.props.history.push("/confirmation");
  }
  render() {
    return (
      <div className={styles.containerCamara}>
        <nav className={styles.topbar}>
          <button className={styles.button}>
            <Link to="/scanner">
              <img src={back} className={styles.iconBack} alt="atrás" />
            </Link>
          </button>
          <div>
            <img src={logo} className={styles.iconLogo} alt="logo" />
          </div>
        </nav>
        <form className={styles.cam} onSubmit={this.submit}>
          <Link to="/confirmation">
            <img src={camara} alt='camara' className={styles.iconCamara} />
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(Camara);
