import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}
