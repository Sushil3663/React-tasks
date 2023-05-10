import React from "react";
import {firstName, lastName} from "./App";


const ComC = () =>{
    return(
        <>
        <firstName.Consumer>
            {(firstName) =>{
                return (
                    <lastName.Consumer>
                        {(lName)=>{
                         return   <h1>My name is {firstName} {lName}</h1>
                        }}
                    </lastName.Consumer>
                )

            }}
        </firstName.Consumer>

        </>
    )
}
export default ComC;