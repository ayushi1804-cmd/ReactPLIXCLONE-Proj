import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    proddesc: "",
    category: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/products", {
      ...formData,
      price: Number(formData.price)
    })
    .then(() => {
      alert("Product Added!");
      setFormData({
        name: "",
        price: "",
        proddesc: "",
        category: "",
        image: ""
      });
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          style={{ display: "block", margin: "10px 0", width: "100%" }}
        />

        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
          style={{ display: "block", margin: "10px 0", width: "100%" }}
        />

        <input
          name="proddesc"
          value={formData.proddesc}
          onChange={handleChange}
          placeholder="Description"
          required
          style={{ display: "block", margin: "10px 0", width: "100%" }}
        />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          style={{ display: "block", margin: "10px 0", width: "100%" }}
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
          style={{ display: "block", margin: "10px 0", width: "100%" }}
        />

        <button type="submit" style={{ padding: "10px 20px" }}>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
