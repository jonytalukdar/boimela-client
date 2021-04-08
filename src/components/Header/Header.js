import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { UserContext } from '../../App';
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <Navbar expand="md">
        <Navbar.Brand href="#home">Boi Mela</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/order">
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/#">
              Deals
            </Nav.Link>
            {loggedInUser.name || loggedInUser.email ? (
              <Nav.Link>{loggedInUser.name}</Nav.Link>
            ) : (
              <Nav.Link
                className="btn btn-primary text-white"
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
