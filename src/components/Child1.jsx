import React from 'react'

function Child1({setSelectedOption}) {
  return (
     <>
        <h2>Child Component 1</h2>
        <button onClick={()=> setSelectedOption("Option 1")}>Option 1</button>
    </>
  )
}

export default Child1