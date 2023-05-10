import React,{useState} from 'react';
import './index.css';

const App = ()=>{
    
    const[name,setName]=useState();
    const[click,setClick]=useState();
    const[cl,setCl]=useState();
    const[pas,setPass] = useState();
    const text = (event) =>{
        // console.log(event.target.value);
        setName(event.target.value);
      
    }
    // When we call function or event,it basically pass object
    const change = (e)=>{
        e.preventDefault();
        setClick(name)
        setCl(pas)

    }
    const pass = (event) =>{
        setPass(event.target.value);

    } 
    return(
        <>
        <form onSubmit={change}>
            <div>
                <h1>Hello,{click}{cl}</h1>
                <input type="text" placeholder='Enter Your Name' onChange={text} value={name}/>
                <h1>Password is {cl}</h1>
                <input type="text" placeholder='Enter your password' onChange={pass} value={pas}/>
                <button type='submit'>Click 😄</button>
            </div>
        </form>
        </>
    )

}

export default App;

let name = ['sushil','karki'];
let detail =[1,...name,'male']
console.log(detail)

let a = ['sushil','karki']; 
let b = ['wisdom','sk'];
console.log([...a,...b])

const [first,...remain] = a
console.log(first)
console.log(...remain)

const bloody ={
    x:"1",
    y:"2"
}
const fang = {
    ...bloody,
    c:'3',
    d:"4"
}
console.log(fang)