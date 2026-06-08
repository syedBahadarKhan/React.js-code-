import React from "react";
import { motion } from "framer-motion";

import ProductList from "../Components/ProductList.jsx";

function Home() {
 

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">🛍️ Shop Products</h1>
        <p className="text-muted">Explore our latest gadgets</p>
      </div>

      {/* Product Grid */}
      <ProductList  />
      
    </div>
  );
}

export default Home;