import React from "react";
import { products } from "../../seed/seed";
import { ProductList } from "../components";
import ItemListContainer from "../components/ItemListContainer";

export const HomePage = () => {
  return (
    <>
      <ItemListContainer greeting="Bienvenidos a la tienda de ropa" />
      <ProductList products={products} />
    </>
  );
};
