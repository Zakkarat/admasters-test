import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { NavStyles } from "../static/stylesheets/style-components.js";
import "../static/stylesheets/navbar.css";
import { connect } from "react-redux";

const NavigationBar = ({counter}) => {
  console.log(counter)
  return (
    <NavStyles>
      <Navbar className="border-underlined" bg="light" expand="md">
        <Container>
          <Navbar.Brand className="bigger-brand">Vegetables</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Nav.Item className="mt-2">
              <h3>Items in cart: {counter}</h3>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Button variant="success">Confirm</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavStyles>
  );
};

const mapStateToProps = state => ({
  counter: state.counter
})

export default connect(mapStateToProps)(NavigationBar);
