import React, { useContext } from "react";
import {firstName, LastName} from './App';

const ConB = () =>{
    const fName = useContext(firstName);
    const lName = useContext(LastName);

    return(

        <>
        <h1>My Name is {fName} {lName}</h1>

        </>
    )
}
export default ConB;
