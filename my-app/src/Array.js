import React from 'react'

function Array() {
    const a=["a","b","c"]
  return (
    a.map((abc)=>
    <div>
<h1>{abc}</h1>
    </div>
  ))
}

export default Array