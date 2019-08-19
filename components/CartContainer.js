import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { CartStyles } from "../static/stylesheets/style-components";

import TableRow from "../components/TableRow";

const CartContainer = ({ items}) => {

  return (
    <CartStyles>
      <h3>Your cart:</h3>
      <Table responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </Table>
      {/* <Card>
        {items.map(item => <Card key={item.id} className="no-border-radius"><Card.Header>{item.title}</Card.Header><Card.Body></Card.Body></Card>)}
      </Card> */}
    </CartStyles>
  );
};

const mapStateToProps = state => {
  return {
    items: state.storage.items
  };
};

export default connect(mapStateToProps)(CartContainer);
