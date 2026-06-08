import { useTheme } from "./ThemeContext.jsx";

function ThemeButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#000",
                color: theme === "light" ? "#000" : "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                border: "1px solid var(--border)",
                cursor: "pointer",
            }}
        >
            currentTheme : {theme}
        </button>
    );
}

export default ThemeButton;