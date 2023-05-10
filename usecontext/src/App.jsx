import React, { createContext } from "react";
import ConA from "./ConA";

const firstName = createContext();
const LastName = createContext();


const App = () => {
  return (
    <>
      <firstName.Provider value={"Sushil"}>
        <LastName.Provider value={"karki"}>
          <ConA />
        </LastName.Provider>
      </firstName.Provider>


    </>

  )
}
export default App;
export {firstName, LastName};