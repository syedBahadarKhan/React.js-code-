import { Link } from "react-router-dom"
import './index.css'
function Navbar () {
    return (
        <nav
        style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        fontSize: "1.5rem",
        fontFamily: "sans-serif",
        backgroundColor: "#bebcbc",
        padding: "1rem",
        margin: 0
      }}
        >
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/service" className="nav-link">Service</Link>
            <Link to="/User/10" className="nav-link"> User</Link>
            <Link to="/product" className="nav-link">Product</Link>
        </nav>
    )
}

export default Navbar