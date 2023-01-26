import React, { useState } from 'react'
import './Buttoncolor.css';
import { Userstate } from './Context/Userprovider';
function Buttoncolor() {
  const{first}=Userstate()
  const{a}=Userstate()
    const [color, setcolor] = useState("black")
  return (
    
    <div>
      <h1>{a}</h1>
      <h1>{first.id}{first.name}</h1> 
        <h1> text color is {color}</h1>
        
        
        <button id="red"onClick={()=>setcolor("red")}>click</button>
        
        
        <button id="blue"onClick={()=>setcolor("blue")}>click</button>
        
       
        <button id="green"onClick={()=>setcolor("green")}>click</button>
        
        </div>  
    
  )
}

export default Buttoncolor