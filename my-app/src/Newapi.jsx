import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function Newapi() {
    const [product, setproduct] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res)=>setproduct(res.data.products))
     
    }, [])
    console.log(product)
    
  return (
    <div className='row' style={{justifyContent:"center"}}>
    {product.map((prd)=>{
   return(
   
         <Card style={{ width: '18rem' ,float:"left",margin:"20px"}}>
    <Card.Img  style={{height:"200px"}}variant="top" src={prd.images[0]}>
    </Card.Img>
    <Card.Body>
      <Card.Title>{prd.brand}</Card.Title>
      <Card.Title>{prd.rating}</Card.Title>
      <Card.Text>
        {prd.category}
      </Card.Text>
      <Button variant="primary">Add</Button>
    </Card.Body>
  </Card>
   )
    
     } ) }
        </div>
  )
        
}

export default Newapi