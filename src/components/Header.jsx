import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Nav>
          <Link to="/">Home</Link>
        </Nav>
        <Nav>
          <Link to="/users">Users</Link>
        </Nav>
        <Nav>
          <Link to="/about">About</Link>
        </Nav>
      </Nav>
    </Navbar>
  );
}

export default Header;
