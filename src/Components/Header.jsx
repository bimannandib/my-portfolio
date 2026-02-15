import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false)

    function toggleOpen() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
      <header>
        <nav className="nav-bar">
          <h1>BN</h1>
          <svg
            className="mobile-menu-btn"
            onClick={toggleOpen}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 30 30"
            fill="#e8e8e8"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
          </svg>
          <ul className={`navbar-links ${open ? "open" : ""}`}>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Skills</span>
            </li>
            <li>
              <span>Projects</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </nav>
      </header>
    );
}