const Cart = ({ cart, removeItem, increaseQty, decreaseQty }) => {
  const totalPrice = cart.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div  className="card d-flex flex-row align-items-center">
                 
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid"
                  style={{ width: '120px', height: '120px', objectFit: 'cover', margin: '10px'}}
                />
                <h5>{item.name}</h5>
                <p>₹{item.price}</p>
                <div className="input-group">
                  <button onClick={() => decreaseQty(item.id)} className="btn btn-outline-secondary">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} className="btn btn-outline-secondary">+</button>
                </div>
              </div>
              <div>
                <button onClick={() => removeItem(item.id)} className="btn btn-danger">Remove</button>
              </div>
            </div>
          </div>
        ))
      )}
      <h4>Total: ₹{totalPrice}</h4>
    </div>
  );
};

export default Cart;
