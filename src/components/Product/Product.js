import React from "react";
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../services/actions";
const Product = (props) => {
  //console.log(props);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <img src={props.imageUrl} alt={props.name} className="product-image" />
      <h3 className="product-name">{props.prod.name}</h3>
      <p className="product-price">${props.prod.price}</p>
      <button
        className="product-button"
        onClick={() => dispatch(addToCart(props.prod))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
