import React from 'react';
import styles from './styles.module.scss';

class Topbar extends React.Component {
    render() {
        return(
            <div className={styles.topbar}>
                <nav>
                    <div>
                        <button>

                        </button>
                    </div>
                    <div>
                        <img></img>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Topbar;