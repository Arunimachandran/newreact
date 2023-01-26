import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit'
import {MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,MDBRipple,MDBCardImage} from 'mdb-react-ui-kit'
    import { BsFillAlarmFill } from 'react-icons/bs'
    import './Icon.css'
function Icon() {
  return (
    <div>
        <MDBCard className='Card'>
        <BsFillAlarmFill className='stylee'/>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
         
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
         
    </div>
  )
}

export default Icon