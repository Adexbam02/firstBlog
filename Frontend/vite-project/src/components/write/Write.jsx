import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <div className="writeContainer">
        <form className="writeBoard">
          <div className="textBoard">
            <textarea
              placeholder="Write New Post Title Here..."
              className="title"
            ></textarea>
            <textarea
              className="textarea"
              placeholder="Write your post content here.."
            ></textarea>
          </div>

          <div className="infoSubmit">
            <span>
              <h4>Writing a Great Post Title </h4>
              <p>
                - Writing a Great Post Title Think of your post title as a super
                short (but compelling!) description — like an overview of the
                actual post in one short sentence.
                <br />- Use keywords where appropriate to help ensure people can
                find your post by search.
              </p>
            </span>

            <input type="submit" className="submit" value="Submit" />
          </div>
        </form>

        <div className="info"></div>
      </div>
    </div>
  );
};

export default Write;
