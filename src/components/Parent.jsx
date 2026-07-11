
import React, { useState } from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="parent">
    <Child1 setSelectedOption= {setSelectedOption}/>
    <Child2  setSelectedOption = {setSelectedOption}/>

    <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default Parent