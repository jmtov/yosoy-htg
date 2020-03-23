import React from 'react';
import styles from './styles.module.scss';

class Composition extends React.Component {
    render() {
        return(
            <div className={styles.subtitle}>
                <h3>Composicion</h3>
                <div className={styles.text}>
                    <p>Efavirenz 600mg</p>
                    <p>Emtricitabina 200mg</p>
                    <p>Tenofovir 300mg</p>
                </div>
            </div>
        );
    }
}

export default Composition;