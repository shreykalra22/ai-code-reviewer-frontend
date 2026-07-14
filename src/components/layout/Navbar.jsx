import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <h2 className="logo">
          AI <span>Code Reviewer</span>
        </h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a
            href="https://github.com/shreykalra22/ai-code-reviewer"
            target="_blank"
            rel="noreferrer"
          >
            Backend
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;