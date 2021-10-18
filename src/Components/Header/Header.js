import React,{useState,useContext} from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light py-3" variant="light">
        
        <Navbar.Brand href="#home" className='text-danger fw-bolder'>Smile Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto fw-bolder mt-2">
           <Nav.Link as={Link}  to='/home' className="me-3 my-link">Home</Nav.Link>
           <Nav.Link as={Link}  to='/about' className="me-3 my-link">About</Nav.Link>
           <Nav.Link as={Link}  to='/service' className="me-3 my-link">Services</Nav.Link>
           <Nav.Link as={Link}  to='/dashboard' className="me-3 my-link">Admin</Nav.Link>
           <Nav.Link as={Link} to='/login' className="me-4 my-link">Login
            </Nav.Link>
          </Nav>
      
          {/* <Nav>
          
          </Nav> */}
        </Navbar.Collapse>
        
      </Navbar>
      </>
    );
};

export default Header;
