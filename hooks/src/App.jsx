import React,{useState} from 'react';
import './index.css'

const App = () =>{
    // console.log("sushil Karki");
    //     console.log("hello".repeat(10))
    // let name = ['sushil','karki'];
    // // console.log(name[1])
    // const [sushil,karki]= name;
    // sushil
    const [count,setCount] = useState(5);
    const Incr = ()=>{
        setCount(count+1);
    }
    const Decr = ()=>{
        setCount(count-1);
    }

    return(
        <>
        
            <h1>{count}</h1>
            <button onClick={Incr}>INCREASE</button>
            <button onClick={Decr}>DECREASE</button>
            
        </>
    )

}

export default App;