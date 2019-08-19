import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addToCart } from "../Redux/actions";

const ProductItem = ({ title, description, price, id, addToCart }) => {
  const handleClick = () => {
    addToCart({
      item: {
        title,
        description,
        price,
        id
      }
    });
  };

  return (
    <Card>
      <Card.Img
        variant="top"
        height={250}
        src="../static/images/image-holder-cropped.jpg"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Price: {price}$
        </Card.Subtitle>
        <Card.Text>{description.slice(0, 100)}</Card.Text>
        <Button onClick={handleClick} variant="outline-success">
          Add to Basket
        </Button>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = {
  addToCart
};

export default connect(
  null,
  mapDispatchToProps
)(ProductItem);
