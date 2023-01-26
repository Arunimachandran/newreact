import React, { useState } from 'react'

function Mapping1() {
    const [car, setfirst] = useState([{brand:"ford",color:"red"}])
  return (
    car.map((abc)=>
    
    <div>
        <h1>{abc.brand} {abc.color}</h1>
    </div>
  ))
}

export default Mapping1