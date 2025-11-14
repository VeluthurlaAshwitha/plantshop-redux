import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing-overlay">
        <h1>GreenHouse</h1>
        <p>Your trusted home for indoor plants</p>
        <p>We offer carefully selected houseplants for every home.</p>
        <Link to="/products" className="btn-primary">Get Started</Link>
      </div>
    </section>
  );
}
