import React from 'react';
import styles from './styles.module.scss';

class Button extends React.Component {
    render() {
        return(
            <div>
                <button className={styles.button}>CONTINUAR</button>
            </div>
        );
    }
}

export default Button;