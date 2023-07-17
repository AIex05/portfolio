import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="five columns">
            <h4>Hi, my name is </h4>
            <h2>Alex Zhu</h2>
            <Link
              class="button"
              to={require("../files/pdf/YTResume.pdf")}
              target="_blank"
              rel="noreferrer"
              download="ZYResume.pdf"
            >
              Download Resume
            </Link>
          </div>
          <div className="one-half column">
            <img
              src={require("../files/image/profile.jpg")}
              alt="Profile picture"
              className="picture"
              width="500px"
              height="500px"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="twelve columns" style={{textAlign:"center"}}>
            <strong>About</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
