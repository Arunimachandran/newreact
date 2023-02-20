import React from 'react'

function Propschild({item,objj,arry,neww}) {
    console.log(neww)
  return (



    <div>
        <h1>{item}</h1>
        <button onClick={()=>neww("welcome")}>click</button>
        <h1>{objj.name}</h1>
        <h1>{objj.age}</h1>
        

      
        {arry.map((array)=>{
            return(
       
        <div>
        <h1>{array.name}</h1>
        <h1>{array.age}</h1>
        
        </div>
        )})}
        
   </div>
)

}

export default Propschild