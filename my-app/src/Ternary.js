import React from 'react'
import { useState } from 'react'
import Spread from './Spread'



function Ternary() {
   const [hide, sethide] = useState(false)
   const change=()=>{
    sethide((abc)=>!abc)
    
    
   }
  return (
    <div>
      {hide?<Spread/>:""}
       <button onClick={change}>{hide===true?"hide":"show"}</button>
    </div>
  )
}

export default Ternary