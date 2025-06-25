import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navigationItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
  { path: "/resume", label: "Resume" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const getNavLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link
          to="/secret"
          className="logo"
          title="Curious minds welcome."
          aria-label="Logo — secret link"
        >
          W.A
        </Link>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          {navigationItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={getNavLinkClass}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;