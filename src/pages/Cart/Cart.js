// Cart.js
import React, { useState, useEffect } from 'react';
import './Cart.css'; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage on component mount
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="Cart-section">
      <h3 className="cart-title">Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty</p>
      ) : (
        <div className="cart-items-container">
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
                <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button className="cart-total">Total: ${calculateTotal()} - Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
