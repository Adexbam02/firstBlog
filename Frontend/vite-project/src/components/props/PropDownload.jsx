import "./propDownload.css"

// eslint-disable-next-line react/prop-types
const PropDownload = ({ people }) => {
  return (
    <span className="downL">
      <span>
        <small>Downloaded By</small>
        <h4>10k + Users</h4>
      </span>
      <img src={people} alt="" />
    </span>
  );
};

export default PropDownload;
