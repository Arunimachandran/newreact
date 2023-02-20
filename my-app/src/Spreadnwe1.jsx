import React, { useState } from 'react'

function Spreadnwe1() {
    const arr=[{name:"appu",age:22},{name:"anju",age:23}]
    const [array, setarray]= useState(arr)
    const obj={name:"ammu",age:21}
    const add=()=>{
        const added=[...array,obj]
        setarray(added)
    }

    
  return (
    <>
    <div className='row'>
        {array.map((arry)=>(
            

                <div style={{border:"1px solid black",width:"230px",borderRadius:"30px",margin:"60px 40px",float:"left"}}>
                <h1>{arry.name}</h1>
                <h1>{arry.age}</h1>
                </div>
            )
                
        )}
         </div>
        <div className='text-center'>
        <button className='btn btn-success' onClick={add}>add</button>
        </div>
        </>
  )
}

export default Spreadnwe1