import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/store">
          Store
        </Link>
        <Link className="nav-link" to="/cart">
          Cart
        </Link>
      </nav>
    </header>
  );
};

export default Header;
