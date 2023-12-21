import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }) => {
  return (
    <div className="row gy-4">
      {products.map((product) => {
        return (
          <div className="col-4">
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};
