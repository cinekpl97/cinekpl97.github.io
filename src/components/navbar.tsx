import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../custom.css";

export default function TopNavbar(): JSX.Element {
  return (
    <Navbar expand="xl" bg="dark" variant="dark" fixed="top" className="navbar">
      <Navbar.Brand href="#home" className="mb-0 h1">
        Main page
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" aria-expanded="false" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
