import React, { useState } from 'react'

function Spreadtask() {
    const stud=[{name:"arjun",mark:99},{name:"sruthi",mark:97}]
    const [info, setinfo] = useState(stud)
    const obj={name:"arathi",mark:96}
    const add=()=>{
        const added=[...info,obj]
        setinfo(added)

    }
  return (

    <div>
        <table>
            <tr>
                <th>name</th>
                <th>mark</th>
            </tr>
    {info.map((item)=>
       <tr>
        <td>{item.name}</td>
        <td>{item.mark}</td>
        
    
   
        
        

        </tr>
        )}
        
         </table>
        <button onClick={add}>Add</button> 
    </div>
    
    
    
   
  )
}

export default Spreadtask