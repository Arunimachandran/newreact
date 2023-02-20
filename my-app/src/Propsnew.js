import React, { useState } from 'react'
import Propschild from './Propschild'

function Propsnew() {
    const [val, setval] = useState("hii hellooo")
    const [obj, setobj] = useState({name:"athulya",age:22})
    const [arr, setarr] = useState([{name:"kavya",age:23},{name:"keerthana",age:22}])
  return (
    <div>
<Propschild item={val} objj={obj} arry={arr} neww={setval}/>
    </div>
  )
}

export default Propsnew