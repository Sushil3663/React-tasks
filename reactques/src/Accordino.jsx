import React, { useState } from "react";
import { que } from './Queapi';
import Ans from "./Ans";

const Accordino = () => {
const[api,setApi]= useState(que);
    return(
        <>
        {
            api.map((element) =>{
                return <Ans key = {element.id} {...element}/>
            })
        }

        </>

    )
   
   
   
}


export default Accordino;