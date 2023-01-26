import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [name, setname] = useState("anu")
    useEffect(() => {
        alert(`hiii ${name}`)
      
    
    
    }, [name])
    
    
    
  return (
    <div>
        
<h1>{name}</h1>
<button onClick={()=>setname("ammu")}>change</button>
    </div>
  )
}

export default Useeffect