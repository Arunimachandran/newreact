import React, { useState } from 'react'
import Obj from './Obj'

function Ternarynew() {
    const [hide, sethide] = useState(false)
    const change=()=>{
        sethide(!hide)
       
    }
  return (
    <div>
         {hide ? <Obj/>: ""}
<button onClick={change}>{hide ? "hide" :"show"}</button>
    </div>
  )
}

export default Ternarynew