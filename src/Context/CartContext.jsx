// CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart items from db.json on initial load
  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      
      // Update existing item on server
      fetch(`http://localhost:3000/cart/${product.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: existingItem.quantity + 1 })
      });
    } else {
      const newItem = { ...product, quantity: 1 };
      setCart([...cart, newItem]);

      // Add new item to server
      fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem)
      });
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);

    fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE"
    });
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);

    fetch(`http://localhost:3000/cart/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity })
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
