import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header>
      <div className="headerContainer">
        <div className="home">
          <h5>Your Journey to Tomorrow Begins Here</h5>
          {/* <h2>Explore the Frontiers of Artificial Intelligence</h2> */}
          <h2>Explore the Frontiers of Bloging Intelligence</h2>
          <p>
            Explore the frontier of blogging innovation. FutureWiter Blog is
            your gateway to a world where ideas flourish, perspectives evolve,
            and narratives shape the future. Embark on this creative journey
            into the heart of blogging.
          </p>
          <span className=""></span>
        </div>

        <div className="line"></div>

        <div>
          <div className="cards">
            <Link to="/" className="card">
              <h3 className="title">The Quantum Leap in Computing</h3>
              <div>
                <h5 className="date">October 15, 2023</h5>
                <small className="author">John Techson</small>
              </div>
            </Link>
            <Link to="/" className="card">
              <h3 className="title">The Mars Colonization Challenge</h3>
              <div>
                <h5 className="date">October 20, 2023</h5>
                <small className="author">Astronomer X</small>
              </div>
            </Link>
            <Link to="/" className="card">
              <h3 className="title">The Ethical Dilemmas of AI</h3>
              <div>
                <h5 className="date">November 5, 2023</h5>
                <small className="author">Sarah Ethicist</small>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
