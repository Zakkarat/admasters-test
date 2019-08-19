import React from "react";
import { products } from "../static/JSON/items.json";
import ProductItem from "./ProductItem";
import CardColumns from "react-bootstrap/CardColumns";
import {CardsStyles} from "../static/stylesheets/style-components"

const Products = () => {
  return (
<CardsStyles>
    <CardColumns className="mt-4">
      {products.map(item => (
        <ProductItem key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          id={item.id}
        />
      ))}
    </CardColumns>
</CardsStyles>
  );
};

export default Products;
