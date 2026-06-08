import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import  Service from "./service"
import Navbar from "./Navbar"
import User from "./User"
import Notfound from "./Notfound"
import Product from "./Product"
import Items from "./Items"
import Price from "./Price"
import './index.css'

function App() {
  

  return (
    <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/User/:id" element={<User />} />
        <Route path="/product" element={<Product />}>
          <Route path="items" element={<Items />} />
          <Route path="price" element={<Price />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
