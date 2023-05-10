import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const Ans = ({ question, answer }) => {
    const [showItem, SetShowItem] = useState(false);
    const show = () => {

        SetShowItem(!showItem)

    }
    return (
        <>
            <div className="sep">
                <h4 onClick={show}>{showItem? '➖':'➕'}</h4>
                <h3>{question}</h3>
            </div>
            {showItem && (<p >{answer}</p>)}
            <hr />

        </>
    )
}
export default Ans;