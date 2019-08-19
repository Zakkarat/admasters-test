import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavStyles } from "../static/stylesheets/style-components.js";
import "../static/stylesheets/navbar.css"

const NavigationBar = () => {
  return (
    <NavStyles>
      <Navbar className="border-underlined" bg="light" expand="md">
        <Container>
          <Navbar.Brand className="bigger-brand">Vegetables</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavStyles>
  );
};

export default NavigationBar;
