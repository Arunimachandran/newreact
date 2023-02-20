import React, { createContext, useState } from 'react'
const newcontextt=createContext()
function Newcontext({children}) {
    const [name, setname] = useState("arun")
    const [array, setarray] = useState([{name:"Hannan",age:"25",qualification:"mca"},{name:"Adarsh",age:"23",qualification:"bca"}])
  return (
    <div>
        <newcontextt.Provider value={{name,setname,array}}>
        {children}
        </newcontextt.Provider>
    </div>
  )
}

export default Newcontext
export {newcontextt}