import React from "react";
import { useSelector } from "react-redux";

export default function ShowProduct() {
  const { title, price } = useSelector((state) => state.product);
  return (
    <div>
      <h1>Show Product</h1>
      <div>
        <h4>Title: {title}</h4>
        <h4>Price: {price}</h4>
      </div>
    </div>
  );
}
