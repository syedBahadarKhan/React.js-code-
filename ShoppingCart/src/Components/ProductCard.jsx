import React from 'react'
import { motion } from "framer-motion";
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
    const { addToCart } = useCart();
    return (
        <div>
              <motion.div
              whileHover={{ scale: 1.02 }}
              className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />

              {/* Card Body */}
              <div className="card-body text-center d-flex flex-column">

                <h5 className="card-title fw-semibold">
                  {product.name}
                </h5>

                <p className="card-text text-primary fw-bold mb-3">
                  ${product.price}
                </p>

                {/* Button */}
                <button
                onClick={() => addToCart(product)}
                className="btn btn-primary mt-auto rounded-pill">
                  Add to Cart
                </button>

              </div>
            </motion.div>
        </div>
    )
}

export default ProductCard
