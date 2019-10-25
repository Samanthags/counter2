import React, {Component} from 'react';

class Counter extends Component{

  constructor (){
    super();
    this.state = {
      coutn: 0,
    }
  }
  render(){
    return(
      <div className = "container">
        <div className = "navbar">Counter.js</div>
        <div className="counter">
          <h1>What do we put here?</h1>
          <button type="button">Increment</button>
          <button type="button">Decrement</button>
        </div>
      </div>
    )
  }
}

export default Counter;
