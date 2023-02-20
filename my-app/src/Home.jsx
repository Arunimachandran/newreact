import React, { useContext } from 'react'
import { newcontextt } from './Newcontext'

const Home = () => {
    const sample=useContext(newcontextt)
    const{name,setname,array}=sample
  return (
    <div>
        {array.map((array1)=>{
            return(
                <div>
                <h1>{array1.name}</h1>
                <h1>{array1.age}</h1>
                <h1>{array1.qualification}</h1>
                </div>
            )
        })}
<h1>{name}</h1>
<button onClick={()=>setname("Arunima")}>change</button>
    </div>
  )
}

export default Home