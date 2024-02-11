import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navContainer">
        <Link to="/" className="logo">
          FutureWriter
        </Link>

        <ul className="navLinks">
          <NavLink to="/write" className="write">Write</NavLink>
          <NavLink to="/read">Read</NavLink>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
