import React, { useState } from 'react';
import { Clock } from './Clock';

// import { Container } from './styles';

export default function ClockPorFunction() {
    const [isClockHidden, setIsClockHidden] = useState(false)

    if(isClockHidden){
        return <h1></h1>
    }
    return (
        <div className="App">
        <button onClick={()=>setIsClockHidden(true)}>Hide Clock</button>
        
        <Clock />
        </div>
    );
}
