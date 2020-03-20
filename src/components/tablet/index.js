import React from 'react';
import Topbar from './topbar';
import ContainerCard from './container-card';
import Button from './button';


class Tablet extends React.Component {
    render() {
        return(
            <div>
                <Topbar/>
                <ContainerCard/>
                <Button/>
            </div>
        );
    }
}

export default Tablet;