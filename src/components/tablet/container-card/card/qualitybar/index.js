import React from 'react';
import './styles.css';


class Bar extends React.Component{
    
constructor(props) {
    super(props);

    this.state = {
      value: '',

    };
  }

  render() {
    return (
        <div>
           <input  onDrag={value => this.setState({ value })}
            onDragComplete={value => console.log(value)} 
            type="range"
             minValue={1} 
             maxValue={10}
              class="slider" 
              id='loader' 
              value={this.state.value}/>
      </div>
    );
  }
}

export default Bar;