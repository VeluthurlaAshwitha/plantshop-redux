import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../slices/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { items, totalCount, totalPrice } = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const list = Object.values(items);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <p>Total plants: {totalCount}</p>
      <p>Total cost: ${totalPrice}</p>

      {list.length === 0 && (
        <>
          <p>No items in cart.</p>
          <Link to="/products" className="btn-primary">Continue Shopping</Link>
        </>
      )}

      {list.map(it => (
        <div className="cart-row" key={it.id}>
          <img src={it.thumbnail} className="thumb small" />
          <div className="meta">
            <h4>{it.name}</h4>
            <p>${it.price}</p>
            <button onClick={() => dispatch(decrease(it.id))}>-</button>
            <span>{it.qty}</span>
            <button onClick={() => dispatch(increase(it.id))}>+</button>
          </div>

          <button onClick={() => dispatch(removeItem(it.id))}>Delete</button>
        </div>
      ))}

      {list.length > 0 && (
        <>
          <button onClick={() => alert("Coming Soon")} className="btn-primary">
            Checkout
          </button>
          <Link to="/products" className="btn-secondary">Continue Shopping</Link>
        </>
      )}
    </div>
  );
}
