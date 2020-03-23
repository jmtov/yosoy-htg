import React from 'react';
import Scaner from './Scaner';
import styles from './styles.module.scss'
import Topbar from './topbar';


function App() {
  return (
    <div className={styles.background}>
      <Topbar/>
      <Scaner/>
    
    </div>
    
     
  );
}

export default App;
