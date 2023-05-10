import React, { useState } from 'react';
import './index.css'



const App = () => {
    const colors = "#8e44ad";
    const [color, setColor] = useState(colors);
    const [name, setName] = useState("click");


    const change =() =>{
        setColor("red");
        setName("Wisdom 🎱")
        

    }
    const back = () =>{
        setColor(colors);
        setName("click");
    }
   

    return (
        <div style={{backgroundColor:color}}>
          {/* <button onClick={change} onDoubleClick={back}>{name}</button> */}
          <button onMouseEnter={change} onMouseLeave={back}>{name}</button>


        </div>
    )
}

export default App;