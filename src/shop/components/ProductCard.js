import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={"/products/" + product.images[0]} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};
