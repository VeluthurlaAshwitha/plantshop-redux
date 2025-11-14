import React from "react";
import plants from "../data/plants";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const groups = plants.reduce((acc, p) => {
    (acc[p.category] ??= []).push(p);
    return acc;
  }, {});

  return (
    <div className="container">
      <h2>Our Plants</h2>
      {Object.keys(groups).map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="grid">
            {groups[cat].map(p => (
              <ProductCard key={p.id} plant={p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
