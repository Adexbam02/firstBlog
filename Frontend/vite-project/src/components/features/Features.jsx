import { featureTop, featureBottom } from "../../data";
import { featureTopImg, featureBottomImg } from "../../assets/img/index";
import Prop from "../props/Prop";
import "./features.css";

const Features = () => {
  return (
    <div className="Features">
      <div className="featuresContainer genP">
        <Prop
          img={featureTopImg}
          title="Future Technology Blog"
          small="Stay informed with our blog section dedicated to future technology."
          featureTitle={featureTop}
        />
        <div className="line"></div>
        <div className="line2"></div>
        <Prop
          img={featureBottomImg}
          title="Research Insights Blogs"
          small="Dive deep into future technology concepts with our research section."
          featureTitle={featureBottom}
        />

        <div className="featureBottom"></div>
      </div>
    </div>
  );
};

export default Features;
