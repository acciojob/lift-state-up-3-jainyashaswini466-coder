
import React, { useState } from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');
  
  return (
    <>
    <Child1 setSelectedOption= {setSelectedOption}/>
    <Child2  setSelectedOption = {setSelectedOption}/>

    <p>selected Option: {selectedOption}</p>
    </>
  )
}

export default App
