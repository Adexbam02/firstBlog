import "./stickyHead.css";
import { Arrow } from "../../assets/img";

const StickyHead = () => {
  return (
    <div className=" sticky">
      <div className="stickyContainer">
        <p>Subscribe to our Newsletter For New & latest Blogs and Resources</p>
        <a href="/">
          <img src={Arrow} alt="" />
        </a>
      </div>
    </div>
  );
};

export default StickyHead;
