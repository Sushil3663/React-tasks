// import React from "react";

function Cal(a,b){
    let c= a+b
    return c
}
function Sub(a,b){

    let c = a -b

    return c
}
function Mult(a,b){
    
    let c = a * b

    return c
}
function Div(a,b){
    let c = a /b
    c = c.toFixed(2);
    return c
}

export default Cal;
export {Sub,Mult,Div};