import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '../components/Card';

function CategoryPage({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?category=${category}`)
      .then((res) => setProducts(res.data));
  }, [category]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{category.toUpperCase()} Products</h2>
      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {products.map((prod) => (
            <Card key={prod.id} product={prod} handleAddToCart={(product) => {
              axios.post("http://localhost:3000/cart", product)
                .then(() => alert("Added to cart"));
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
