import {Link} from "react-router-dom"
import { useState } from "react";
   function Navbar(){
     const [menuOpen, setMenuOpen] = useState(false);
   return(
   
   <nav className="relative flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 bg-gray-900 text-white shadow-md">
      <Link  className="text-xl sm:text-2xl font-bold tracking-wide" to="/">
            <h2>🎬 Movie Explorer</h2>
        </Link>
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 text-base">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
        </div>
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-4 py-4 md:hidden">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          </div>
        )}
   </nav>

   )}

export default Navbar