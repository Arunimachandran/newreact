import React, { useState } from 'react'
import { Userstate } from './Context/Userprovider';
import './Spreadd.css';

function Spreadd() {
  
    const [car, setcar] = useState({brand:"ford",color:"red"})
    const colorchange=()=>{
        setcar(preobj=>{return{...preobj,color:"white"}})
    }
  return (
    
    <div className='butn'>
        <div class="card w-25">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    

    <p class="card-text"> <h1>The car is {car.brand}and its color is{car.color} </h1>
    
    <button onClick={colorchange}>change</button></p>
   
   
  </div>
</div>
       
    </div>
  )
}

export default Spreadd