import React from 'react';
import styles from './styles.module.scss';

class Back extends React.Component {
  render() {
    return (
      <button className={styles.button}>
        <img src={this.props.assets} className={styles.assets} alt="back" />
      </button>
    );
  }
}

export default Back;
