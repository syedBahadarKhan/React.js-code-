import React from 'react'
import { motion } from "framer-motion";
import laptop from "../images/Laptop.jpg";
import phone from "../images/Phone.jpg";
import headphones from "../images/headphone.jpg";
import keyboard from "../images/Keyboard.jpg";
import ProductCard from './ProductCard';

function ProductList() {
     const products = [
    { id: 1, name: "Laptop", price: 800, img: laptop },
    { id: 2, name: "Phone", price: 500, img: phone },
    { id: 3, name: "Headphones", price: 100, img: headphones },
    { id: 4, name: "Keyboard", price: 70, img: keyboard },
  ];
    return (
        <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">

          <ProductCard product={product}/>

          </div>
        ))}
      </div>
    )
}

export default ProductList
