import { useTheme } from "./context/ThemeContext.jsx";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h1 className="navbar-title">My Website</h1>
      <button onClick={toggleTheme} className="theme-button" style={{color: theme === "light" ? "#000" : "#fff"}}>
        {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </button>
    </nav>
  );
}