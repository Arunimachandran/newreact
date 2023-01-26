import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillBellFill, BsFillCartPlusFill } from 'react-icons/bs';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Flip.css'
function Flip() {
  return (
    <div>
         <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <a href="#">
            
        <img width="75" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart"></img></a><br/>
        <p className='pic'><i>Explore</i>
        <span class="plus"><i>Plus</i></span>
        <img width="10" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"></img></p>
       
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
                  <Form className="d-flex">
                    
            <Form.Control
              type="search"
              placeholder="Search for products,brands and more"
              className="searchh"
              aria-label="Search"
            />
            
            </Form>
            <Button variant="light" className='log'>Login </Button>
            <Nav
            className="me-auto my-2 my-lg-0"
            
            navbarScroll
            >
            
            <Nav.Link href="#action2" className='sel'>Become a seller</Nav.Link>
          
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" ><BsFillBellFill/>Notification Preferences</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                24x7 customer care
                
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Advertise
              </NavDropdown.Item>
            </NavDropdown>
            
            {/* <Nav.Link href="#" disabled>
              Cart
            </Nav.Link> */}
            <Nav.Link href="#action1"className='cart'><BsFillCartPlusFill/>Cart</Nav.Link>
            
            </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='secondbar'>
      <div className='g-link'>
        <a href='#'>
          <div className='g-image'>
            <img src='https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100'/>
          </div>
          <div className='grocery'>Mobiles
          </div>
        </a>
      </div>
      <div className='g-link'>
        <a href='#'>
          <div className='g-image'>
            <img src='https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100'/>
          </div>
          <div className='grocery'>Fashion
          </div>
        </a>
      </div>
      <div className='g-link'>
        <a href='#'>
          <div className='g-image'>
            <img src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100'/>
          </div>
          <div className='grocery'>Electronics
          </div>
        </a>
      </div>
      <div className='g-link'>
        <a href='#'>
          <div className='g-image'>
            <img src='https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100'/>
          </div>
          <div className='grocery'>Home
          </div>
        </a>
      </div>
      <div className='g-link'>
        <a href='#'>
          <div className='g-image'>
            <img src='https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100'/>
          </div>
          <div className='grocery'>Appliances
          </div>
        </a>
      </div>
      <div className='g-link'>
        <a href='#'>
          <div className='g-image'>
            <img src='https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100'/>
          </div>
          <div className='grocery'>Travel
          </div>
        </a>
      </div>
      <div className='g-link'>
        <a href='#'>
          <div className='g-image'>
            <img src='https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100'/>
          </div>
          <div className='grocery'>Beauty,Toys
          </div>
        </a>
      </div>
      <div className='g-link'>
        <a href='#'>
          <div className='g-image'>
            <img src='https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'/>
          </div>
          <div className='grocery'>Top Offers
          </div>
        </a>
      </div>
      <div className='g-link'>
        <a href='#'>
          <div className='g-image'>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100'/>
          </div>
          <div className='grocery'>Two Wheelers
          </div>
        </a>
      </div>
    </div>
    {/* <div className='imagee'>
      <div>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"></img>
        
      
        <img loading="lazy"alt="Fashion" src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"></img>
        
        <img loading="lazy" alt="Electronics" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"></img>
        <img loading="lazy" alt="Home" src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"></img>
<img loading="lazy" alt="Appliances" src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"></img>
<img loading="lazy" alt="Travel" src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"></img>
<img loading="lazy" alt="Beauty, Toys &amp; More" src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"></img>
<img loading="lazy" alt="Top Offers" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"></img>
<img loading="lazy" alt="Two Wheelers" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"></img>  
      
      <div className='head'>phone
      fashion
      Electronics
      Home
      Appliances
      Travel
      Beauty, Toys
      Top Offers
      Two Wheelers
      </div>
      </div>
      
    </div> */}
    <Carousel className='picc'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blog.talkcharge.com/wp-content/uploads/2020/09/Flipkart-Upcoming-Sale.jpg"
          alt="First slide" height="500"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t3.ftcdn.net/jpg/02/27/62/44/360_F_227624472_gdh9pN8OvFFwiUcUjM8VyUP9LLDG0NfX.jpg"
          alt="Second slide" height="500"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.jagranimages.com/images/22_05_2018-flipkart-apple-week-sale_17985802.jpg"
          alt="Third slide" height="500"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel><br/>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" />
        <Card.Body>
          <Card.Title><center>Laptop</center></Card.Title>
          <Card.Text>
           <center>Dell</center>
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i0.wp.com/techweez.com/wp-content/uploads/2021/04/OPPO-Reno5-F-smartphone-scaled.jpg?fit=2560%2C1707&ssl=1" />
        <Card.Body>
          <Card.Title><center>Mobile</center></Card.Title>
          <Card.Text>
           <center>Samsung</center>
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" />
        <Card.Body>
          <Card.Title><center>Laptop</center></Card.Title>
          <Card.Text>
           <center>hp</center><br/>
            
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
    </div>
  )
}

export default Flip