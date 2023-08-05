import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div
          className="row"
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="one-half column">
            <h4>Hi, my name is </h4>
            <h2>Alex Zhu</h2>
            <Link
              to={require("../files/pdf/YTResume.pdf")}
              target="_blank"
              rel="noreferrer"
              download="ZYResume.pdf"
            >
              <button className="button">Download Resume</button>
            </Link>
            <div className="row icons">
              <a href="https://github.com/AIex05" target="_blank">
                <img
                  className="icon"
                  height="32"
                  width="32"
                  src="https://cdn.simpleicons.org/tencentqq/#15a5e8"
                />
              </a>
              <a href="https://github.com/AIex05"  target="_blank">
              <img
                className="icon"
                height="32"
                width="32"
                src="https://cdn.simpleicons.org/github/#15a5e8"
              />
              </a>
              <a href="https://github.com/AIex05"  target="_blank">
              <img
                className="icon"
                height="32"
                width="32"
                src="https://cdn.simpleicons.org/livechat/#15a5e8"
              />
              </a>
              <a href="https://github.com/AIex05"  target="_blank">
              <img
                className="icon"
                height="32"
                width="32"
                src="https://cdn.simpleicons.org/gmail/#15a5e8"
              />
              </a>
              <a href="https://github.com/AIex05"  target="_blank">
              <img
                className="icon"
                height="32"
                width="32"
                src="https://cdn.simpleicons.org/wechat/#15a5e8"
              />
              </a>
            </div>
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
          <div
            className="twelve columns"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            <h1 style={{ fontSize: "5rem" }}>About Me</h1>
            <div class="grid">
              <figure class="effect-lily">
                <img src={require("../files/image/Gompei.jpeg")} alt="img12" />
                <figcaption>
                  <div>
                    <h2 style={{ color: "#FFFFFF" }}>
                      <span>Education</span>
                    </h2>
                    <p>Degrees I have accomplished</p>
                  </div>
                  <Link to="/about">View more</Link>
                </figcaption>
              </figure>
              <figure class="effect-lily">
                <img src={require("../files/image/LineGraph.png")} alt="img1" />
                <figcaption>
                  <div>
                    <h2>
                      <span>Skills</span>
                    </h2>
                    <p>Technical skills that I have developed</p>
                  </div>
                  <Link to="/skills">View more</Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div
              className="twelve columns"
              style={{ textAlign: "center", marginTop: "10px" }}
            >
              <div class="grid">
                <figure class="effect-lily">
                  <img
                    src={require("../files/image/AboutMeSnow.png")}
                    alt="img12"
                  />
                  <figcaption>
                    <div>
                      <h2>
                        <span>Hobbies</span>
                      </h2>
                      <p>I also love to play besides learning</p>
                    </div>
                    <Link to="/about">View more</Link>
                  </figcaption>
                </figure>
                <figure class="effect-lily">
                  <img
                    src="https://tympanus.net/Development/HoverEffectIdeas/img/1.jpg"
                    alt="img1"
                  />
                  <figcaption>
                    <div>
                      <h2>
                        <sapn>Projects</sapn>
                      </h2>
                      <p>Wonderful projects I have done</p>
                    </div>
                    <Link to="/projects">View more</Link>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
