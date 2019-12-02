import React, { Component } from 'react';
import { Clock } from './Clock';

// import { Container } from './styles';

export default class ClockPorClass extends Component {
    state = {
        isClockHidden: false
      }
    
      hideClock = () => {
        this.setState({isClockHidden: true})
      }
      render() {
        if(this.state.isClockHidden){
          return <h1></h1>
        }
        return (
          <div className="App">
            <button onClick={this.hideClock}>Hide Clock</button>
            
            <Clock />
          </div>
        );
      }
}
