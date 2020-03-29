import React from 'react';
import styles from './styles.module.scss';
import ContSuperior from './container-superior';
import ContInferior from './container-inferior';

class Tarjetas extends React.Component {
    render() {
        return (
            <div className={styles.tarjeta}>
                <ContSuperior />
                <ContInferior />
                <input type="radio" name="card" id="1" className={styles.radio3} />
            </div>
        );
    }
}

export default Tarjetas;