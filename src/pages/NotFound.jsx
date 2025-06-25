import "../App.css";
import { Link } from "react-router-dom";
import { useIsDarkMode } from "../hooks/useIsDarkMode";
import { motion, AnimatePresence } from "framer-motion";

export default function NotFound() {
  const isDark = useIsDarkMode();

  const header = isDark
    ? "404 — Lost in the stars"
    : "404 — Page Not Found";

  const quote = isDark
    ? "You’ve wandered too far. But the stars are still watching."
    : "Seems like you’ve taken a wrong turn — but it’s still a beautiful day.";

  return (
    <div className="page notfound-grid">
      <motion.div
        className="notfound-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={header}
            className="section-title"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            {header}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={quote}
            className="section-text notfound-quote"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {quote}
          </motion.p>
        </AnimatePresence>

        <Link to="/" className="back-home">
          🡐 Return Home
        </Link>
      </motion.div>
    </div>
  );
}
