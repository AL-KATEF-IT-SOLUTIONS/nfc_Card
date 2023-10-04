import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiMiniPhone } from 'react-icons/hi2';
import '../styles/navbar.css';



const Navb = () => {
  return (
    <Navbar expand="lg" className="bar bg-white p-4 ">

    <div className="container d-flex justify-content-between">


      <div>
      <Navbar.Brand href="#home">Jr</Navbar.Brand>

      </div>


      <div>
      <Navbar.Collapse id="basic-navbar-nav" className='' >
          <Nav.Link className='ms-5' href="#home">Home</Nav.Link>
          <Nav.Link className='ms-5' href="#link">About me</Nav.Link>
          <Nav.Link className='ms-5' href="#link">Showcase</Nav.Link>
          
      </Navbar.Collapse>
      </div>
      <div>
      <Navbar.Collapse id="basic-navbar-nav" className=''>
      <Nav.Link href="#home" className='me-5'>Eng</Nav.Link>
      <HiMiniPhone className='ms-5'/>
      </Navbar.Collapse>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      </div>


  </Navbar>
  

  )
}

export default Navb