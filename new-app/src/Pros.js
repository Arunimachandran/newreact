import React, { useState } from 'react'
import Block from './Block'

function Pros() {
    const [first, setfirst] = useState([{id:101,name:"ammu"}])
  return (
    <div>
        <Block first={first}/>
    </div>
  )
}

export default Pros