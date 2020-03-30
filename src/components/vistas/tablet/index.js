import React from 'react';
import { Link } from "react-router-dom";
import Topbar from "../../reusable-components/topbar";
import ContainerCard from './container-card';
import Button from "../../reusable-components/button";
import styles from './styles.module.scss';

class Tablet extends React.Component {
    render() {
        return (
            <div>
                <Topbar />
                <div className={styles.container}>
                <ContainerCard />
                <Link to="/foundations-selector">
                    {}
                    <Button title="Continuar" />
                </Link>
                </div>
            </div>
        );
    }
}

export default Tablet;
