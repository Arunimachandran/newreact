import React, { useEffect, useState } from 'react'

function Useeffectnew() {
    const [name, setname] = useState("arun")
    useEffect(() => {
      alert(`the name is ${name}`)
    
    }, [name])
    
  return (
    <div>
        <h1>{name}</h1>
<button onClick={()=>setname("arunima")}>click me</button>
    </div>
  )
}

export default Useeffectnew