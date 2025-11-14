import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../slices/cartSlice";

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const already = useSelector(s => s.cart.items[plant.id]);

  return (
    <div className="card">
      <img src={plant.thumbnail} className="thumb" />
      <h4>{plant.name}</h4>
      <p>${plant.price}</p>
      <button
        disabled={!!already}
        onClick={() => dispatch(addItem(plant))}
      >
        {already ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
