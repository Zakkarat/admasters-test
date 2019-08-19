import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { NavStyles } from "../static/stylesheets/style-components";
import { connect } from "react-redux";

const NavigationBar = ({ counter }) => {
  const router = useRouter();
  return (
    <NavStyles>
      <Navbar className="border-underlined" bg="light" expand="md">
        <Container>
          <Navbar.Brand className="bigger-brand">Vegetables</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              {router.asPath === "/" ? (
                counter !== 0 ? (
                  <>
                    <Nav.Item className="mt-2">
                      <h3>Items in cart: {counter}</h3>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>
                        <Link href="/confirm">
                          <Button variant="success">Proceed</Button>
                        </Link>
                      </Nav.Link>
                    </Nav.Item>
                  </>
                ) : null
              ) : (
                <Nav.Link>
                  <Link href="/">
                    <Button variant="dark">Go Back</Button>
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavStyles>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.storage.counter
  };
};

export default connect(mapStateToProps)(NavigationBar);
