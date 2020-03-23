import React from 'react';
import './styles.css';

class Bar extends React.Component {

val = () => {
    var inv = setInterval(val, 10);
    function val(){
        var divval = document.getElementById("loader").style.width;
        var value = document.getElementById("a").value;        
        value++;
        divval = value + "%";
        document.getElementById("loader").style.width = divval;
}
}

    render() {
        return (
            <div>
                <input onDrag={this.val} type="range" min="1" max="10" class="slider" id='loader'/>
            </div>
        );
    }
}

export default Bar;