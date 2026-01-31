import React, { useEffect, useState } from 'react';
import Carousel from '../Components/Carousel';
import ProductCard from '../Components/ProductCard';
import Review from '../Components/review';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error fetching products:", err));
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrev = () => page > 1 && setPage(page - 1);
  const handleNext = () => page < totalPages && setPage(page + 1);

  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="container mt-4">
      <Carousel />
      <div className="container my-5">
        <h2 className="text-left mb-4">Best Selling Products:</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {paginatedProducts.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹{product.price}</p>
                 <button
  className="btn btn-success w-50"
  onClick={() => {
    addToCart(product); 
    alert(`${product.name} added to cart!`);
  }}
>
  Add 
</button>

                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center my-4">
          <button className="btn btn-outline-primary me-3" onClick={handlePrev} disabled={page === 1}>
            Prev
          </button>
          <span>Page {page} of {totalPages}</span>
          <button className="btn btn-outline-primary ms-3" onClick={handleNext} disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>

      <div className='d-flex justify-content-center align-items-center my-4'>
        <img src="https://images.plixlife.com/hosted/clean_label-08f513eea7c4.png?aio=w-1200" alt="" />
      </div>

      <div className="container mt-4">
        <h1 className="mb-3 fw-bold">Trending Products</h1>
        <div className="scroll-container d-flex overflow-auto gap-3 pb-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <div className="container mt-4">
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Home;
