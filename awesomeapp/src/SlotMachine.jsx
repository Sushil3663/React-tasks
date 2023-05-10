import React from 'react';
import './index.css'


const SlotM = (props) => {
    let {x,y,z} = props;

    if (x === y && y === z) {
        return (
            <>
                <div className='slot'>
                    {x}{y}{z}
                    <h1>This is Matching</h1>

                </div>
                <hr />




            </>
        );
    }
    else {
        return (
            <>

                <div className='slot'>
                    {x}{y}{z}
                    <h1>This is Not Matching</h1>

                </div>
                <hr />

            </>
        );
    }
};

export default SlotM;