import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Link, Brand } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="light" fixed="top" className="navbar-main-container">
      <Navbar.Brand className="nav-brand">Butter Cookies</Navbar.Brand>
      <Nav.Link className="nav-link" href="#home">
        Home
      </Nav.Link>
      <Nav.Link className="nav-link" href="#features">
        Features
      </Nav.Link>
      <Nav.Link className="nav-link" href="#Review">
        Latest Reviewed
      </Nav.Link>
    </Navbar>
  );
}

export default NavigationBar;
