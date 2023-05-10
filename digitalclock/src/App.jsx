import React from 'react';
import './index.css';
import { useState } from 'react';

const App = () =>{

    const [time,setTime] = useState(new Date().toLocaleTimeString());
    const updateTime = ()=>{
        let Time = new Date().toLocaleTimeString();
        setTime(Time);
    }
    setInterval(updateTime,1000);
    return(
        <>
            <h1>{time}</h1>
        </>
    )

}

export default App;