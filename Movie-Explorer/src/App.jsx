import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieDetail from "./pages/MovieDetail";
import Home   from "./pages/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
   <Router>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie/:id" element={<MovieDetail/>}/>
     </Routes>
   </Router>
  );
}

export default App;