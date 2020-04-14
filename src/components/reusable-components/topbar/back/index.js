import React from 'react';
import styles from './styles.module.scss';
import {Link} from "react-router-dom";

class Back extends React.Component {
  render() {
    return (
      <button className={styles.button}>
        <Link to={this.props.link}>
          <img src={this.props.assets} className={styles.assets} alt="back" />
        </Link>
      </button>
    );
  }
}

export default Back;