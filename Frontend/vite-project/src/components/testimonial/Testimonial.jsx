import "./testimonial.css";
import { testimonial } from "../../data";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonialCont genP">
        <div className="testimonialCards">
          {testimonial.map(
            ({
              id,
              profileImg,
              profileName,
              profileLocation,
              rating,
              testimonial,
            }) => (
              <div key={id} className="testimonialCard">
                <div className="profile">
                  <img src={profileImg} alt="profile image" />
                  <span>
                    <h4>{profileName}</h4>
                    <small>{profileLocation}</small>
                  </span>
                </div>

                <div className="testimonialText">
                  <img src={rating} alt="rating" />
                  <p>{testimonial}</p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="lineTest1"></div>
        <div className="lineTest2"></div>
        <div className="lineTest3"></div>
      </div>
    </div>
  );
};

export default Testimonial;
