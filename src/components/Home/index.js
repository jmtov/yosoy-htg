import React from 'react';
import ContainerOne from './ContainerOne';
import styles from './styles.module.scss';
import ContainerTwo from './ContainerTwo';

function Home() {
    return(
        <div className={styles.home}>
            <ContainerOne/>
            <hr className={styles.hr}/>
            <ContainerTwo/>
        </div>
    );
}

export default Home;