import React from 'react';
import styles from './styles.module.scss';
import Form from './form';

class Searcher extends React.Component {
    render() {
        return (
            <div className={styles.contBuscador}>
                <Form placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default Searcher;
