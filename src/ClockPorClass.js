import React, { Component } from 'react';
import { Clock } from './Clock';

// import { Container } from './styles';

export default class ClockPorClass extends Component {
    state = {
        isClockHidden: false
      }
    
      hideClock = (param) => {
        this.setState({isClockHidden: param})
      }
      render() {
        if(this.state.isClockHidden){
          return (
            <div className="App">
                <button onClick={()=>this.hideClock(false)}>Show Clock</button>
                <h1>Clock Class Component</h1>
            </div>
          );
        }
        return (
          <div className="App">
            <button onClick={()=>this.hideClock(true)}>Hide Clock</button>
            
            <Clock />
          </div>
        );
      }
}
