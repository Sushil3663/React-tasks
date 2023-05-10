import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Select = () =>{
    const [data, setData] = useState();
    const [name, setName] = useState();


    const changes = (event) =>{
        setData(event.target.value);
    }

    
    useEffect(() =>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`);
            setName(res.data.name)
        }
        getData();
    })

    return(
        <>
        <h1>You select {data}</h1>
        <h1>The name of pokemone is {name}</h1>


        <select onChange={changes} value={data}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="25">25</option>
        </select>

        </>
    )
}

export default Select;