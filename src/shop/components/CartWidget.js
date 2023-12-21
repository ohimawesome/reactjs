import React from "react";
import { CartFill } from "react-bootstrap-icons";

export const CartWidget = () => {
  return (
    <div className="position-relative">
      <CartFill color="royalblue" size={30} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">10</span>
    </div>
  );
};
