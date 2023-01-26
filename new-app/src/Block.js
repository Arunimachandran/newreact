import React from 'react'

const Block = (prox) => {
    const first=prox.first
    console.log(first)
  return (
    first.map((abc)=>
    <div>
       <h1>{abc.id} {abc.name}</h1>
    </div>
  ))
}

export default Block