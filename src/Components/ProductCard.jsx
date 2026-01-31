import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className="card shadow-sm rounded-4 border-0 d-flex flex-column"
      style={{ width: "220px", height: "100%", flex: "0 0 auto" }}
    >
      {/* Image with badges */}
      <div className="position-relative">
        <img
          src={product.image}
          className="card-img-top rounded-top-4"
          alt={product.title}
          style={{ height: "180px", objectFit: "contain", padding: "8px" }}
        />
        <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
          {product.tag}
        </span>
        <span className="badge bg-info text-white position-absolute top-0 end-0 m-2">
          {product.discount}
        </span>
      </div>

      {/* Body */}
      <div className="card-body px-3 py-2 text-center d-flex flex-column flex-grow-1">
        <h6 className="card-title fw-semibold mb-1" style={{ fontSize: "14px" }}>
          {product.title}
        </h6>

        <p className="mb-1 text-secondary" style={{ fontSize: "12px" }}>
          ⭐ {product.rating} |{" "}
          <span className="text-capitalize">{product.category}</span>
        </p>

        <p className="mb-2" style={{ fontSize: "13px" }}>
          <span className="text-decoration-line-through text-muted me-1">
            ₹{product.oldPrice}
          </span>
          <span className="fw-bold">₹{product.price}</span>
        </p>

        <button
          className="btn btn-success w-100 fw-semibold mt-auto"
          onClick={() => addToCart(product)}
          style={{ fontSize: "13px", padding: "6px 0" }}
        >
          + ADD
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
