import React, { useState } from 'react';
import ClockHooks from './ClockHooks';

// import { Container } from './styles';

export default function ClockPorFunction() {
    const [isClockHidden, setIsClockHidden] = useState(false)

    if(isClockHidden){
        return (
            <div className="App">
                <button onClick={()=>setIsClockHidden(false)}>Show Clock</button>
                <h1>Clock Function Component</h1>
            </div>
        );
    }
    return (
        <div className="App">
        <button onClick={()=>setIsClockHidden(true)}>Hide Clock</button>
        
        <ClockHooks />
        </div>
    );
}
