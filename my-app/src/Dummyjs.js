import React from 'react'
import axios from  'axios'
import { useState } from 'react'
function Dummyjs() {
    axios.get('https://dummyjson.com/products').then ((pro)=>{
        setfirst(pro.data.products)
        console.log(pro.data.products)
    })
    const [first, setfirst] = useState([])
  return (
    <div>
        {first.map((abc)=>(
        
        <h1>{abc.title}</h1>
        ))}
    </div>
  )
}

export default Dummyjs