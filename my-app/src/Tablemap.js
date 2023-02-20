import React from 'react'
import './Tablemap.css';

function Tablemap() {
    const students=[{id:101,name:"ammu"},{id:102,name:"anu"}]
  return (
    <div>
        <table className='tb'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                
            </tr>
            
            {students.map((abc)=>
            <tr>
            <td>{abc.id} </td>
            <td>{abc.name}</td>
            
            </tr>
            
            )}
           
        </table>

    </div>
  ) 
}

export default Tablemap