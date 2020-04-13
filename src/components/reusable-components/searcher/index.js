import React from 'react';
import styles from './styles.module.scss';
import lupa from '../../../assets/lupa.png';

class Searcher extends React.Component {
  state = { value: "" }
  pasoPalabra = (e) => {
    this.setState({ value: e.target.value });
    this.props.buscador(e.target.value)
  }
  render() {
    return (
        <div action="" className={styles.containerSearcher}>
          <button className={styles.containerIcon}>
            <img src={lupa} className={styles.icon} alt="lupa" />
          </button>
          <div className={styles.containerInput}>
            <input type="text" placeholder={this.props.placeholder} value={this.state.value}
              className={styles.input}
              onChange={this.pasoPalabra} />
          </div>
        </div>
    );
  }
}

export default Searcher;
