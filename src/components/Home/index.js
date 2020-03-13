import React from 'react';
import ContainerOne from './ContainerOne';
import  'styles.module.scss';

function Home() {
    return(
        <div className={styles.home}>
            <ContainerOne/>
            <hr className="hr"/>
            <containerTwo/>
        </div>
    );
}

export default Home;