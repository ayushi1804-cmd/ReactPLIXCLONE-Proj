import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import AddProduct from "./Pages/AddProduct";
import CategoryPage from "./Components/CaregoryPage";
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Carousel from "./Components/Carousel";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      const updated = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updated);
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeItem={removeItem}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/category/facewash" element={<CategoryPage category="facewash" />} />
        <Route path="/category/shampoos" element={<CategoryPage category="shampoos" />} />
        <Route path="/category/lotions" element={<CategoryPage category="lotions" />} />
        <Route path="/category/serums" element={<CategoryPage category="serums" />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
