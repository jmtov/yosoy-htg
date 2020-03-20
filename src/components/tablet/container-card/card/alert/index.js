import React from 'react';
import styles from './styles.module.scss';

function Alert () {
    return(
        <div className={styles.alert}>
            <p>Recorda pedir solo la cantidad de pastillas que necesites para que siempre haya medicacion disponible para otre</p>
        </div>
    );
}

export default Alert;