import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5 row mx-0">
      <Col>
        <Navbar.Brand>Ecommerce</Navbar.Brand>
      </Col>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Col>
        <Nav className="d-flex justify-content-center gap-4">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/category/kid" className="nav-link">
            Kids
          </Link>
          <Link to="/category/women" className="nav-link">
            Women
          </Link>
          <Link to="/category/men" className="nav-link">
            Men
          </Link>
          <Link to="/category/unisex" className="nav-link">
            Unisex
          </Link>
        </Nav>
      </Col>
      <Col>
        <Nav className="d-flex justify-content-end">
          <CartWidget />
        </Nav>
      </Col>
    </Navbar>
  );
};
