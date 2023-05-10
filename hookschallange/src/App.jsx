import React, { useState } from "react";
import './index.css';



const App = () =>{
    const time = new Date().toLocaleTimeString();

    const [date, setDate] = useState(time);
    const Time = ()=>{
    const time = new Date().toLocaleTimeString();
        setDate(time);

    }
    return(
        <>
            <h1>{date}</h1>
            <button onClick={Time}>Get Time</button>
        </>
    )

}
export default App;