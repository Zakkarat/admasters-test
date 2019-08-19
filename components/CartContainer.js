import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { CartStyles } from "../static/stylesheets/style-components";

import TableRow from "../components/TableRow";

const CartContainer = ({ items }) => {
  const [overall, setOverall] = useState(0);
  useEffect(() => {
    const allValues = items.map(item => item.price * item.counter);
    setOverall(
      allValues.length !== 0 ? allValues.reduce((acc, item) => acc + item) : 0
    );
  });
  return (
    <CartStyles>
      <h3>Your cart:</h3>
      <Table borderless responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <TableRow key={item.id} item={item} />
          ))}
          <tr>
            <td>
              <h3>Overall: {overall}</h3>
            </td>
            <td />
            <td />
            <td>
              <Button size="lg" variant="success" disabled={overall === 0}>
                Confirm
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </CartStyles>
  );
};

const mapStateToProps = state => {
  return {
    items: state.storage.items
  };
};

export default connect(mapStateToProps)(CartContainer);
