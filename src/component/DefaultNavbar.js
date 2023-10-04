import React, { useEffect, useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./DefaultNavbar.css";
import AuthContext from "../context/AuthProvider";

export default function DefaultNavbar() {
  const { auth, logout } = useContext(AuthContext);
  const location = useLocation();
  const menuProps = {};
  let contentToRender;
  if (auth) {
    contentToRender = (
      <>
        {" "}
        <Navbar.Brand className="custom-brand" as={Link} to="/">
          My App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end custom-collapse"
          id="navbar-nav"
        >
          <Nav>
            <Nav.Link className="material-symbols-outlined" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/muscles">
              Muscles
            </Nav.Link>
            <Nav.Link as={Link} to="/plan">
              Plan
            </Nav.Link>
            <NavDropdown
              //className="material-symbols-outlined"
              //className="dropdown"
              align="end"
              title="Person"
              menuProps={menuProps}
            >
              <NavDropdown.Item as={Link} to="/person">
                Your Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/" onClick={logout}>
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </>
    );
  } else if (location.pathname === "/login") {
    contentToRender = <></>;
  } else {
    contentToRender = (
      <>
        <Navbar.Brand className="custom-brand" as={Link} to="/">
          My App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end custom-collapse"
          id="navbar-nav"
        >
          <Nav className="ml-auto">
            <Nav.Link className="material-symbols-outlined" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    );
  }
  return (
    <Navbar
      expand="lg"
      className={location.pathname === "/login" ? "notstyle" : "navbar-style"}
    >
      {contentToRender}
    </Navbar>
  );
}
