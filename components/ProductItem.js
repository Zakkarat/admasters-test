import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductItem = ({title, description, price, id}) => {
  return (
      <Card>
        <Card.Img variant="top" src="../static/images/image-holder-cropped.jpg" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Price: {price}$</Card.Subtitle>
          <Card.Text>
            {description.slice(0, 100)}
          </Card.Text>
          <Button variant="outline-success">Add to Basket</Button>
        </Card.Body>
      </Card>
  );
};

export default ProductItem;
