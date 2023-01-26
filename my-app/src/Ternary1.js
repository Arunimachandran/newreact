import React from 'react'
import { useState } from 'react'
import State from './State'

function Ternary1() {
    const [Hide, setHide] = useState(false)
    const click=()=>{
        setHide((abc)=>!abc)
    }
  return (
    <div>
        {Hide?<State/>:""}
        <button onClick={click}>{Hide===true?"Hide":"show"}
        </button>
    </div>
  )
}

export default Ternary1