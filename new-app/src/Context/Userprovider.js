import React from 'react'
import { createContext } from 'react'
import{useState}from 'react'
import {useContext} from 'react'
const UserContext=createContext()

const Userprovider = ({children}) => {
    let hi="hello"
    let a="hiii"
    const [first, setfirst] = useState(
        {id:101,name:"apple",img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} )
        const [rfc, setrfc] = useState([{id:101,name:"arjun"},{id:102,name:"anju"}])
    
   

    
  return (

    <div>
        <UserContext.Provider value={{hi,a,first,rfc}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}
export const Userstate=()=>{
    return useContext(UserContext)
}
export default Userprovider