import React from "react";
import styles from "./styles.module.scss";

class Back extends React.Component {
    render() {
        return (
            <ul className={styles.ul}>
                <li>
                    <button className={styles.button}>
                        <img src={this.props.assets} className={styles.assets} alt="" />
                    </button>
                </li>
            </ul>
        );
    }
}

export default Back;