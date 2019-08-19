import React, { useState } from "react";
import { connect } from "react-redux";
import { add, minus, deleteItem } from "../Redux/actions";
import Button from "react-bootstrap/Button";

const TableRow = ({ item, add, minus, deleteItem }) => {
  const [counter, setCounter] = useState(item.counter);
  const handleClick = ({ target }) => {
    console.log("ya zdes dva raza bul");
    if (target.innerText === "+") {
      add(item.id);
    } else if (item.counter > 0) {
      minus(item.id);
    }
    setCounter(item.counter);
  };

  const handleDelete = () => {
    deleteItem(item.id);
  }
  return (
    <tr>
      <td>{item.title}</td>
      <td>
        <Button variant="light" onClick={handleClick}>
          +
        </Button>
        {counter}
        <Button variant="light" onClick={handleClick}>
          -
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = {
  add,
  minus,
  deleteItem
};

export default connect(
  null,
  mapDispatchToProps
)(TableRow);
