import React from 'react';

import styles from './styles.module.scss';

class Logo extends React.Component {
  render() {
    return (
      <div>
         <img src={this.props.assets} className={styles.assets} alt="logo" />
      </div>     
    );
  }
}

export default Logo;
