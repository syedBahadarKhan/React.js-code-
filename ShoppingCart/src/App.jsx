import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Cartpage from "./Pages/Cartpage.jsx"
import Home from "./Pages/Home.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useCart, CartProvider } from "./context/CartContext.jsx";

function Navbar() {
  const { cart } = useCart();
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">🛒 MyShop</Link>
        <div>
          <Link className="nav-link d-inline me-3 text-white" to="/">Home</Link>
          <Link className="nav-link d-inline text-white" to="/cart">Cart {cart.length}</Link>
        </div>
      </div>
    </nav>
  )
}

function App() {


  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
