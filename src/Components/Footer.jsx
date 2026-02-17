export default function Footer() {
    return (
      <footer className="footer-content">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/bimannandib" target="_blank">
            💻
          </a>
          <a href="https://www.linkedin.com/in/biman-nandi-bn/" target="_blank">
            💼
          </a>
          <a href="mailto:bimannandib@gmai.com" target="_blank">
            📧
          </a>
          <a href="https://x.com/LunarKode" target="_blank">
            🐦
          </a>
        </div>
        <div className="copyright">
          <p>
            <small>&copy; 2026 Biman Nandi. All Rights Reserved.</small>
          </p>
          <p>
            <small>Built with React ⚛️</small>
          </p>
        </div>
      </footer>
    );
}