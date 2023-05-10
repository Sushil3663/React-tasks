import React from "react";
import { Route,Switch } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";

const App = () =>{
    return(
        <>
        <Navbar/>
     
       <Switch>
       <Route  exact path="/" Component={<Home/>} />
       <Route path="/about" Component={<About/>} />


       </Switch>

            
        </>
    )
}
export default App;