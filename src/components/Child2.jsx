import React from 'react'

function Child2({setSelectedOption}) {
  return (
    <>
        <h2>Child Component 2</h2>
        <button onClick={()=> setSelectedOption("Option 2")}>Option2</button>
    </>
  )
}

export default Child2