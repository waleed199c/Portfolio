import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
  Made with 💻 + ☕ &nbsp; <span className="love">and lots of ❤️</span>
</p>
        <div className="footer-links">
          <a href="/home">Home</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-icons">
          <a
            href="https://github.com/waleed199c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/alwaleed-alshaghnoubi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
