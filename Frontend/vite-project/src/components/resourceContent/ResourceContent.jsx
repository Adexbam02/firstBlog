import PropBtn from "../props/PropBtn";
import PropDownload from "../props/propDownload";
import "./resourceContent.css";
// import { topics } from "../../data";
import { People2, VR, Ebook, Whitepaper, Digital } from "../../assets/img/index";

const ResourceContent = () => {
  return (
    <div className="resourceCont">
      <div className="resourceContContainer genP">
        <div className="top ">
          {/* {topics.map(({ id, topicIcon, topicTitle, topicP, textTitleb, textTitlep, img, totalSmall, totalTopic, downSmall, downTopic, autSmall, autTopic }) => {
            return (
              <div key={id}>
                
              </div>
            );
          })} */}
          <div className="topLeft">
            <img src={Ebook} alt="" />
            <h3>Ebooks</h3>
            <p>
              Explore our collection of ebooks covering a wide spectrum of
              future technology topics.
            </p>
            <PropBtn btnTile="Download Ebooks Now" />
            <PropDownload people={People2} />
          </div>

          <div className="topRight topic">
            <span className="textTitle">
              <h4>Variety of Topics</h4>
              <p>
                Topics include AI in education (25%), renewable energy (20%),
                healthcare (15%), space exploration (25%), and biotechnology
                (15%).
              </p>
            </span>
            <img src={VR} alt="" />
            <span className="tolFor">
              <span className="total">
                <small>Total Ebooks</small>
                <h4>Over 100 ebooks</h4>
              </span>

              <span className="format">
                <span className="downF">
                  <small>Download Formats</small>
                  <h4>PDF format for access.</h4>
                </span>

                <PropBtn btnTile="Preview" />
              </span>
            </span>
            <span className="insight">
              <small>Average Author Expertise</small>
              <h4>
                Ebooks are authored by renowned experts with an average of 15
                years of experience
              </h4>
            </span>
          </div>
        </div>

        <div className="lineRes"></div>
        <div className="lineRes2"></div>

        <div className="bottom">
          {/* {topics.map(({ id, topicIcon, topicTitle, topicP, textTitleb, textTitlep, img, totalSmall, totalTopic, downSmall, downTopic, autSmall, autTopic }) => {
            return (
              <div key={id}>
                
              </div>
            );
          })} */}
          <div className="topLeft">
            <img src={Whitepaper} alt="" />
            <h3>Whitepapers</h3>
            <p>
              Dive into comprehensive reports and analyses with our collection
              of whitepapers.
            </p>
            <PropBtn btnTile="Download Ebooks Now" />
            <PropDownload people={People2} />
          </div>

          <div className="topRight topic">
            <span className="textTitle">
              <h4>Topics Coverage</h4>
              <p>
                Whitepapers cover quantum computing (20%), AI ethics (15%),
                space mining prospects (20%), AI in healthcare (15%), and
                renewable energy strategies (30%).
              </p>
            </span>
            <img src={Digital} alt="" />
            <span className="tolFor">
              <span className="total">
                <small>Total Whitepapers</small>
                <h4>Over 50 whitepapers</h4>
              </span>

              <span className="format">
                <span className="downF">
                  <small>Download Formats</small>
                  <h4>PDF format for access.</h4>
                </span>

                <PropBtn btnTile="Preview" />
              </span>
            </span>
            <span className="insight">
              <small>Average Author Expertise</small>
              <h4>
                Whitepapers are authored by subject matter experts with an
                average of 20 years of experience.
              </h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceContent;
