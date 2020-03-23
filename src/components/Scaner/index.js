import React from 'react';
import styles from './styles.module.scss';
import ContainerOne from './ContainerOne';
import ContainerTwo from './ContainerTwo'
function scaner() {
    return(
        <div className={styles.Scaner}>
            <ContainerOne/>
            <ContainerTwo/>
        </div>
    );
}

export default scaner;