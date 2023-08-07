import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Input/Input";
import Logo from "./Logo";
import { UseSelector, useSelector } from "react-redux";
const Navbar = () => {
  const cartItems = useSelector((state) => state.items);
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "#0F1111",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "auto",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Input></Input>
        </div>
        <Link to="/cart" className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartItems.length}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
