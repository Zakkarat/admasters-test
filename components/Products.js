import React, {useEffect, useState} from "react";
//import { products } from "../static/JSON/items.json";
import ProductItem from "./ProductItem";
import CardColumns from "react-bootstrap/CardColumns";
import {CardsStyles} from "../static/stylesheets/style-components"
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const products = axios('http://192.168.88.72:8081/api/product').then((response) => {
        setProducts(response.data);
    })
  }, [])

  return (
<CardsStyles>
    <CardColumns className="mt-4">
      {products ? products.map(item => (
        <ProductItem key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          id={item.id}
        />
      )) : null}
    </CardColumns>
</CardsStyles>
  );
};

export default Products;
