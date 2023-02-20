import React from 'react'
import { Userstate } from './Context/Userprovider'

function B() {
    const {rfc}=Userstate()
  return (
    rfc.map((abc)=>
    <div>
   <h1>{abc.id} {abc.name}</h1>
    </div>
  ))
}

export default B