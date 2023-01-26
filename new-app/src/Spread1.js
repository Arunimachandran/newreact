import React, { useState } from 'react'
import { Userstate } from './Context/Userprovider'

function Spread1() {
  const{hi}=Userstate()
  const [emp, setemp] = useState({id:101,name:"ammu",address:"dzfghjkc"})
  const idchange=()=>{
    setemp(num=>{return{...num,name:"anu",address:"ghj"}})
    
  }
  
  return (
    
    <div>
      {hi}
      <h1>the emp id is {emp.id} and name is {emp.name} {emp.address}</h1>
       <button onClick={idchange}>change</button>
    </div>
  )
}

export default Spread1