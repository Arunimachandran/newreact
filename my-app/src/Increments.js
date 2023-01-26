import React, { useState } from 'react'

function Increments() {
    const [num, setnum]=useState(0)
  return (
    <div>
        <div class="card" w-25>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="text-center">
    <p class="card-text">  <h1>increment{num}</h1>
        <button onClick={()=>setnum(num+1)}>+</button>
        <button onClick={()=>setnum(num-1)}>-</button></p>
        </div><br></br>
        <div class="text-center">
    <button type="button" class="btn btn-primary">Button</button>
  </div>
</div>
        {/* <h1>increment{num}</h1>
        <button onClick={()=>setnum(num+1)}>+</button>
        <button onClick={()=>setnum(num-1)}>-</button> */}
    </div>
    </div>
  )
}

export default Increments