import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { RiPencilLine } from "react-icons/ri";
// import { IoMdBook } from "react-icons/io";
const Navbar = () => {
  return (
    <nav>
      <div className="navContainer">
        <Link to="/" className="logo">
          FutureWriter
        </Link>

        <ul className="navLinks">
          <NavLink to="/write" className="write"><RiPencilLine /></NavLink>
          {/* <NavLink to="/read" className="read"><IoMdBook /></NavLink> */}
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
