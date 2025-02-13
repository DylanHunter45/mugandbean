import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">☕ Mug and Bean</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/coffees" className="nav-link">
          Coffees
        </Link>
        <Link to="/brewing" className="nav-link">
          Brewing
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
