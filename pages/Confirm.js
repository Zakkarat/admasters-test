import React from "react";
import Container from "react-bootstrap/Container";
import NavigationBar from "../components/NavigationBar";
import CartContainer from "../components/CartContainer";

const Confirm = () => {
  return (
    <>
      <NavigationBar />
      <Container className="mt-4">
        <CartContainer />
      </Container>
    </>
  );
};


export default Confirm;
