import "./footer.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="sectioP footer">
      <div className="footerContainer">
        <div className="links">
          <a href="/">Home</a>
          <a href="/">Posts</a>
          <a href="/">Create</a>
          {/* <Link to="/">Home</Link>
          <Link to="/">Post</Link>
          <Link to="/">Create</Link> */}
        </div>
        <div className="copyright">Adexbam</div>
      </div>
    </div>
  );
};

export default Footer;
