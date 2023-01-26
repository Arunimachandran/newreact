import React from 'react'
import {Carousel} from 'react-bootstrap'
function Cauroslee() {
    const a=[{image:"https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"},{image:"https://www.shutterstock.com/image-photo/river-side-landscape-view-hand-260nw-1833604357.jpg"}]
  return (
   
    <div>
 <Carousel>
  {a.map((abc)=>{return(
      <Carousel.Item>
        <img src={abc.image}
          className="d-block w-100"
   
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      )})}
     
    </Carousel>
  

    </div>
  )
}

export default Cauroslee