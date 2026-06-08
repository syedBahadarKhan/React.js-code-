import React from 'react'
import { useCart } from "../context/CartContext"; 
import { motion, AnimatePresence } from "framer-motion";

import { div } from "framer-motion/client"; 

function Cart() {
     const { cart, updateQty, removeItem, total } = useCart();
    return (
        <div className="table-responsive">

          {cart.length === 0 ? (
            <div className="alert alert-info">No item in the cart</div>
          ) : (
            <>
            
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th style={{ width: "120px" }}>Qty</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                  >
                    <td className="fw-semibold">{item.name}</td>

                    <td>${item.price}</td>

                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) => updateQty(item.id, Number(e.target.value))}
                        className="form-control text-center"
                      />
                    </td>

                    <td className="fw-medium">
                      ${item.price * item.qty}
                    </td>

                    <td>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 gap-3">

          <h4 className="fw-bold">
            Total: <span className="text-primary">${total.toFixed(2)}</span>
          </h4>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary px-4 py-2 rounded-pill"
          >
            Checkout
          </motion.button>
        </div>
            </>
          )}

        </div>
    )
}

export default Cart
