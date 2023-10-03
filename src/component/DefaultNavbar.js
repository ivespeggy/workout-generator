import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./DefaultNavbar.css";

export default function DefaultNavbar() {
  const location = useLocation();
  const { authorized } = location.state || {};
  let contentToRender;
  if (authorized) {
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
          <Nav className="ml-auto">
            <Nav.Link className="material-symbols-outlined" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/muscles">
              Muscles
            </Nav.Link>
            <Nav.Link as={Link} to="/plan">
              Plan
            </Nav.Link>
            <Nav.Link
              className="material-symbols-outlined"
              as={Link}
              to="/login"
            >
              person
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    );
  } else if (!authorized && location.pathname === "/login") {
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
