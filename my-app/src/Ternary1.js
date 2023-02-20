import React from 'react'
import { useState } from 'react'
import State from './State'

function Ternary1() {
    const [Hide, setHide] = useState(false)
    const click=()=>{
        setHide(!Hide)
    }
  return (
    <div>
        {Hide?<State/>:""}
        <button onClick={click}>{Hide ?"Hide":"show"}
        </button>
    </div>
  )
}

export default Ternary1