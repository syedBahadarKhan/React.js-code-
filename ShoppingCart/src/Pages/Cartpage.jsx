import React, { useState } from "react";
import Cart from "../Components/Cart.jsx";

function Cartpage() {
    
  

  return (
    <div className="container py-5">

      {/* Card Wrapper */}
      <div className="card shadow-lg border-0 rounded-4 p-4">

        {/* Title */}
        <h2 className="fw-bold mb-4">🛒 Shopping Cart</h2>
       
        <Cart />
        {/* Total Section */}
    

      </div>
    </div>
  );
}

export default Cartpage;