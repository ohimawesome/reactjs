import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../seed/seed";
import { ProductList } from "../components";

export const CategoryPage = () => {
  const { slug } = useParams();
  const productsCategory = products.filter((product) => product.gender === slug);
  return (
    <>
      <h1 className="text-center">Category {slug}</h1>
      <ProductList products={productsCategory} />
    </>
  );
};
