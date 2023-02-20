import React, { useState } from 'react'

function Spreadnew() {
    const arr=[{name:"arunima",age:23,qualification:"msc"},{name:"arun",age:23,qualification:"bca"}]
    const [array, setarray] = useState(arr)
    const obj={name:"arun",age:23,qualification:"bca"}
    const add=()=>{
        const added=[...array,obj]
        setarray(added)
    }
  return (
    
    <>
    
    <div className='row'>
{array.map((item)=>{
    return(
        <div style={{border:"1px solid black",width:"250px",margin:"30px 60px",padding:'20px',borderRadius:"20px",float:"left"}}>
        <h1>{item.name}</h1>
        <h1>{item.age}</h1>
        <h1>{item.qualification}</h1>
        </div>
       
    )
}


)}

    </div>
    <div className='text-center'>
    <button onClick={add}>add</button>
    </div>
    </>
  )
}

export default Spreadnew