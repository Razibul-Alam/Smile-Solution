
import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import useAuth from './../../Hooks/useAuth';
import {Link} from "react-router-dom";
const Header = () => {
  const{logOut,user}=useAuth()
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light py-3" variant="light">
        
        <Navbar.Brand href="#home" className='text-danger fw-bolder'>SMILE SOLUTION </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto fw-bolder mt-2">
           <Nav.Link as={Link}  to='/home' className="me-3 my-link">Home</Nav.Link>
           <Nav.Link as={Link}  to='/appointment' className="me-3 my-link">Appointment</Nav.Link>
           <Nav.Link as={Link}  to='/doctors' className="me-3 my-link">Doctors</Nav.Link>
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
