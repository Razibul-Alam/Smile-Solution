import React,{useState} from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import useAuth from './../../Hooks/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
const Header = () => {
  const{logOut,user}=useAuth()
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light py-3" variant="light">
        
        <Navbar.Brand href="#home" className='text-danger fw-bolder'>SMILE SOLUTION</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto fw-bolder mt-2">
           <Nav.Link as={Link}  to='/home' className="me-3 my-link">Home</Nav.Link>
           <Nav.Link as={Link}  to='/about' className="me-3 my-link">About</Nav.Link>
           <Nav.Link as={Link}  to='/appointment' className="me-3 my-link">Appointment</Nav.Link>
           <Nav.Link as={Link}  to='/services' className="me-3 my-link">services</Nav.Link>
           {user?.email&&<Nav.Link className="me-3 my-link">{user?.displayName}</Nav.Link>}
          {user?.email?<Nav.Link onClick={logOut} className="me-4 my-link">Logout
            </Nav.Link>:
           <Nav.Link as={Link} to='/login' className="me-4 my-link">Login
            </Nav.Link>}
          </Nav>
      
        </Navbar.Collapse>
        
      </Navbar>
      </>
    );
};

export default Header;
