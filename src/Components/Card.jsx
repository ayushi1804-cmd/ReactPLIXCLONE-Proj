import React from "react";
import { useCart } from "../Context/CartContext";

const Card = ({ products }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(products);
    alert("Added to cart!");
  };

  return (
    <div className="card" style={{ boxShadow: "0 3px 6px rgba(0,0,0,0.16)", width: "18rem", margin: "10px" }}>
      <img src={products.image} alt={products.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{products.name}</h5>
        <p className="card-text">{products.proddesc}</p>
        <p>₹{products.price}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
