import React, { useState } from 'react'

function State() {
    const [name, setname] = useState("abc")
  return (
    <div>
    <h1>my name is {name}</h1>
    <button onClick={()=>setname("ammu")}>change</button>    
    </div>
  );
}

export default State