import React, { useState } from "react";

const Input = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        style={{ width: "100%", height: "30px", flexGrow: "inherit" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button style={{ backgroundColor: "cyan" }}>Search</button>
    </div>
  );
};

export default Input;
