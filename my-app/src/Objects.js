import React from 'react'

function Objects() {
  const a=[{type:"fiat",model:"500",color:"red",image:"https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"},{type:"od",model:"600",color:"blue",image:"https://www.w3schools.com/css/img_forest.jpg"}]
  return (
    a.map((abc)=>
    <div>
      <div className='w-25 p-1'>
      <div class="card">
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
    <img src={abc.image} width="100%"/>
   
      <p class="card-text"><h1>{abc.type},{abc.model},{abc.color}</h1>
      
      </p>
      
      <a href="#!" class="btn btn-primary">Button</a>
    </div>
  </div>
  </div>
    </div>
  
  ))
}

export default Objects