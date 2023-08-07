import React, { useState } from "react";
import Product from "../../components/Product/Product";
import Data from "../../Data.json";
import { Link } from "react-router-dom";
const imag =
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";
const Home = () => {
  const handleAddToCart = (id) => {
    console.log("click");
  };
  const [products, setProducts] = useState([...Data]);
  const handleSearch = (name) => {
    const newProducts = products.filter((p) => p.name === name);
    setProducts([newProducts]);
  };

  //console.log(Data);
  return (
    <div style={{ marginLeft: "7%", display: "flex", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        {products.map((product, id) => (
          <Product
            key={id}
            prod={product}
            imageUrl={imag}
            onClickButton={() => handleAddToCart(product.id)}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
