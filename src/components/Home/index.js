import React from 'react';
import ContainerOne from './ContainerOne';
import styles from './styles.module.scss';

function Home() {
    return(
        <div className={styles.home}>
            <ContainerOne/>
            <hr className={styles.hr}/>
            <containerTwo/>
        </div>
    );
}

export default Home;