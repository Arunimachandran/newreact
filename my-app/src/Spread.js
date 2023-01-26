import React from 'react'
import { useState } from 'react'

function Spread() {
    const [car,setcar] = useState({brand:"ford",color:"red"})
    const change=()=>{
      setcar(preobj=>{return{...preobj,color:"white"}})
    }
  return (
    <div>
      <h1>the car is{car.brand} and color is {car.color}</h1>
      <button onClick={change}>change</button>
    </div>
  )
}

export default Spread