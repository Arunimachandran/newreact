import React from 'react'
import { Userstate } from './Context/Userprovider'

function A() {
    const {first}=Userstate()
  return (
    // first.map((abc)=>
    
    <div>
<h1>{first.id}{first.name} </h1>
<img src={first.img}/>
    </div>
  )
}

export default A