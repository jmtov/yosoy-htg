import React from "react";

import styles from './styles.module.scss';

class Logo extends React.Component {
    render() {
        return (
            <ul className={styles.ul}>
                <li>
                    <img src={this.props.assets} className={styles.assets} alt="" />
                </li>
            </ul>
        )
    }
}

export default Logo;
