import React from 'react';
import styles from './styles.module.scss';
import Card from './card';

class ContainerCard extends React.Component {
    render() {
        return (
            <div className={styles.containerCard}>
                <Card />
            </div>
        );
    }
}

export default ContainerCard;
