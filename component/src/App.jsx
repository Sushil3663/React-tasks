import React, { createContext } from "react";
import ComA from "./ComA";
const firstName = createContext();
const lastName = createContext();

const App = () => {
    return (
        <>
            <firstName.Provider value={'Sushil'}>

                <lastName.Provider value={'karki'}>
                    <ComA />
                </lastName.Provider>
            </firstName.Provider>
        </>
    )
}
export default App;
export { firstName, lastName };