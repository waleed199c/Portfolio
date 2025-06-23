import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">W.A</div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a
            href="/Alwaleed-Khaled-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-nav-link"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
