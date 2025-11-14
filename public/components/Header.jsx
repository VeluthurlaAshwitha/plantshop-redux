import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((s) => s.cart.totalCount);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="brand">GreenHouse</Link>
        <nav>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart <span className="cart-badge">{count}</span></Link>
        </nav>
      </div>
    </header>
  );
}
