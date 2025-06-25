// ThemeToggle.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        boxShadow:
          theme === "light"
            ? "0 0 12px 4px rgba(125, 216, 0, 0.5)"
            : "0 0 12px 4px rgba(88, 166, 255, 0.3)",
      }}
      whileHover={{
        scale: 1.1,
        boxShadow:
          theme === "light"
            ? "0 0 18px 6px rgba(125, 216, 0, 0.7)"
            : "0 0 18px 6px rgba(88, 166, 255, 0.6)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={theme}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "light" ? "🌙" : "🌞"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

export default ThemeToggle;
