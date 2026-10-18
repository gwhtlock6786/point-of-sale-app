import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
