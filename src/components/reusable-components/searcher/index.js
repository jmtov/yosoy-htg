import React from 'react';
import styles from './styles.module.scss';
import lupa from '../../../assets/lupa.png';

class Searcher extends React.Component {
  render() {
    return (
      <form className={styles.containerSearcher}>
        <button className={styles.containerIcon} type='submit'>
          <img src={lupa} className={styles.icon} alt="lupa" />
        </button>
        <div className={styles.containerInput}>
          <input type="text" placeholder={this.props.placeholder} className={styles.input} />
        </div>
      </form>
    );
  }
}

export default Searcher;
