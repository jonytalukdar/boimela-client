import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">Boi Mela</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/home">
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/#">
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/#">
              Deals
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
