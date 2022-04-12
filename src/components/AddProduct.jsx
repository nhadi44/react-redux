import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../features/productSlice";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const updateProduct = (e) => {
    e.preventDefault();
    dispatch(update({ title, price }));
  };

  return (
    <div>
      <h1>Add Product</h1>
      <div className="translate-y-5 box-border">
        <form
          onSubmit={updateProduct}
          className="box-border bg-violet-800 p-5 w-3/4 text-white rounded-sm space-y-5"
        >
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 rounded-sm p-2 w-full text-black"
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border-2 rounded-sm p-2 w-full text-black"
            />
          </div>
          <button className="bg-green-400 text-black w-full p-3 rounded hover:bg-green-500 transition delay-75">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
