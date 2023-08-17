import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarComp.css'


export default function NavbarComp() {
  return (
    <Navbar expand="lg" className='navbar-style'>
      <Navbar.Brand className="custom-brand" as={Link} to="/">
        My App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse className="justify-content-end custom-collapse" id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/muscles">
            Muscles
          </Nav.Link>
          <Nav.Link as={Link} to="/plan">
            Plan
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
