import React from 'react';
import styles from './styles.module.scss';


class Bar extends React.Component {

  render() {
    return (
      <div>
        <input
          type="range"
          minValue={1}
          maxValue={10}
          class={styles.slider} />
      </div>
    );
  }
}

export default Bar;