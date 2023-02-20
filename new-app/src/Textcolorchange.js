import React, { useState } from 'react'

function Textcolorchange() {
    const [color, setcolor] = useState("black")
    // const [txt, settxt] = useState("TextColor")
    const clr={color:color}
  return (
    <div>
        <h1 style={clr}>Text color is {color}</h1>
        <button onClick={()=>{setcolor('red')}}>red</button>
        <button onClick={()=>{setcolor('green')}}>green</button>
        <button onClick={()=>{setcolor('blue')}}>blue</button>
    </div>
  )
}

export default Textcolorchange