import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <a
          href="/Alwaleed-Khaled-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-nav-link"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
