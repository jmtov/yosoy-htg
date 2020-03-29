import React from 'react';
import Tarjetas from './targets';
import styles from './styles.module.scss';

class ContainerPastis extends React.Component {
    render() {
        return (
            <form className={styles.contPastis}>
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
            </form>
        );
    }

}

export default ContainerPastis;
