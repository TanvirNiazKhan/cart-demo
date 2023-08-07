import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../services/actions";

const Cart = () => {
  const cartItems = useSelector((state) => state.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  const dispatch = useDispatch();
  // console.log(sumWithInitial);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div style={{ display: "flex", margin: "20px" }}>
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
              <button onClick={() => dispatch(removeToCart(item))}>
                Cancel
              </button>
            </div>
          ))}
          <h1>Total amount: ${totalAmount}</h1>
        </ul>
      )}
    </div>
  );
};

export default Cart;
