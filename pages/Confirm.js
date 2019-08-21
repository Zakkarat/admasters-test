import React from "react";
import Container from "react-bootstrap/Container";
import NavigationBar from "../components/NavigationBar";
import CartContainer from "../components/CartContainer";
import UserForm from "../components/UserForm"

const Confirm = () => {
  return (
    <>
      <NavigationBar />
      <Container className="mt-4">
        <UserForm />
      </Container>
    </>
  );
};

export default Confirm;
