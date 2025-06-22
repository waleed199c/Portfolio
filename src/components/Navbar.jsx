import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      padding: '1rem',
      position: 'fixed',
      top: 0,
      width: '100%',
      background: '#0d1117',
      zIndex: 10
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
<Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
<Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
<Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
<a
  href="/Alwaleed-Khaled-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resume-nav-link"
>
  Resume
</a>

    </nav>
  );
}

export default Navbar;
