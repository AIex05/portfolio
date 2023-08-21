import { useCollapse } from "react-collapsed";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const About = () => {
  const props = { duration: 1000 };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

  function CollapsibleSki({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="skiAndSnowboard container">
        <div
          className="row"
          style={{ display: "flex", alignContent: "center" }}
        >
          <div className="ten columns">
            <h4>Ski & Snowboard</h4>
          </div>
          <button {...getToggleProps()} class="button-primary">
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <section {...getCollapseProps()}>
          <div className="row">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/SkiPic1.jpeg")}
                alt="SkiPic1.jpeg"
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/SkiPic2.jpeg")}
                alt="SkiPic1.jpeg"
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/SkiPic3.jpeg")}
                alt="SkiPic1.jpeg"
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/SkiPic4.jpeg")}
                alt="SkiPic1.jpeg"
                width="666px"
                height="500px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/SkiPic5.jpeg")}
                alt="SkiPic1.jpeg"
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/RidingOnCable.png")}
                alt="SkiPic1.jpeg"
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/WachussetSki.png")}
                alt="SkiPic1.jpeg"
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/SkiSelfie.jpeg")}
                alt="SkiPic1.jpeg"
                width="666px"
                height="500px"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }

  function CollapsibleTravel({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="travel container">
        <div
          className="row"
          style={{ display: "flex", alignContent: "center" }}
        >
          <div className="ten columns">
            <h4>Travel</h4>
          </div>
          <button {...getToggleProps()} class="button-primary">
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <section {...getCollapseProps()}>
          <CollapsibleTravelHokaido props={props}></CollapsibleTravelHokaido>
          <CollapsibleTravelNara props={props}></CollapsibleTravelNara>
          <div className="row">
            <h5>Tokyo</h5>
          </div>
          <div className="row">
            <h5>Osaka</h5>
          </div>
        </section>
      </div>
    );
  }

  function CollapsibleTravelHokaido({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="container">
        <div className="row" style={{ display: "flex", alignContent: "left", marginBottom:"10px" }}>
          <div className="ten columns">
            <h5>Hokaido 北海道</h5>
          </div>
          <button {...getToggleProps()} class="button-primary">
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <section {...getCollapseProps()}>
          <div className="row">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Hokaido/DSCF1275.JPG")}
                width="666px"
                height="500px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Hokaido/IMG_1556.jpeg")}
                width="666px"
                height="500px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Hokaido/IMG_1823.jpeg")}
                width="666px"
                height="500px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Hokaido/IMG_2432.jpeg")}
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Hokaido/IMG_1954.jpeg")}
                width="666px"
                height="500px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Hokaido/IMG_1909.jpeg")}
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Hokaido/IMG_1195.jpeg")}
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Hokaido/IMG_1505.jpeg")}
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Hokaido/IMG_1787.jpeg")}
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Hokaido/IMG_1601.jpeg")}
                width="500px"
                height="666px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Hokaido/IMG_1767.jpeg")}
                width="1439px"
                height="500px"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }

  function CollapsibleTravelNara({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="container">
        <div className="row" style={{ display: "flex", alignContent: "left" }}>
          <div className="ten columns">
            <h5>Nara　奈良</h5>
          </div>
          <button {...getToggleProps()} class="button-primary">
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <section {...getCollapseProps()}>
          <div className="row">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Nara/IMG_2169.jpeg")}
                width="666px"
                height="500px"
              />
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={require("../files/image/Nara/IMG_2219.jpeg")}
                width="666px"
                height="500px"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }

  function CollapsibleGame({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="game container">
        <div className="row">
          <div className="three columns">
            <h4>Games</h4>
          </div>
        </div>
        <div className="row"></div>
      </div>
    );
  }

  function CollapsibleSports({ props }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(props);

    return (
      <div className="badminton container">
        <div className="row">
          <div className="three columns">
            <h4>Badminton</h4>
          </div>
        </div>
        <div className="row">
          <p>I love Badmintin</p>
        </div>
      </div>
    );
  }

  return (
    <div className="about">
      <div className="academicTitle container">
        <div className="row" style={{ textAlign: "center" }}>
          <h2>Academic</h2>
        </div>
      </div>
      <div className="dataScience container">
        <div className="row">
          <h4>Data Science</h4>
        </div>
        <div className="row">
          <div
            className="four columns"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={require("../files/image/WPIDS.png")}
              alt="Profile picture"
              className="picture"
              width="230px"
              height="230px"
            />
          </div>
          <div className="eight columns">
            <p>
              I am a <span class="bold">Data Science</span> student who recently
              graduated from Worcester Polytechnic Institute (WPI) in 2023. I
              have a strong passion for data science and plan to pursue a{" "}
              <span class="bold">
                master's degree in Analytics at the University of Southern
                California (USC)
              </span>{" "}
              starting from 2023. During my time at WPI, I gained a solid
              foundation in statistical analysis, machine learning, and data
              visualization through various courses and projects. I also
              developed proficiency in programming languages like Python and R,
              essential for data analysis.
            </p>
          </div>
        </div>
      </div>
      <div className="computerScience container">
        <div className="row">
          <h4>Computer Science</h4>
        </div>
        <div className="row">
          <div
            className="four columns"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={require("../files/image/CS.png")}
              alt="Profile picture"
              className="picture"
              width="230px"
              height="230px"
            />
          </div>
          <div className="eight columns">
            <p>
              I also hold an{" "}
              <span className="bold">
                undergraduate degree in Computer Science
              </span>{" "}
              from Worcester Polytechnic Institute (WPI), which provides a
              strong foundation in programming languages and concepts. Through
              my studies, I gained proficiency in Java, C++, SQL, and other
              programming languages. These skills are invaluable in approaching
              data science projects from a technical standpoint. My background
              in computer science has sharpened my problem-solving abilities and
              logical thinking, crucial skills in data science.
            </p>
          </div>
        </div>
      </div>
      <div className="hobbyTitle container">
        <div className="row" style={{ textAlign: "center" }}>
          <h2>Hobbies</h2>
        </div>
      </div>
      <CollapsibleSki props={props}></CollapsibleSki>
      <CollapsibleSports props={props}></CollapsibleSports>
      <CollapsibleGame props={props}></CollapsibleGame>
      <CollapsibleTravel props={props}></CollapsibleTravel>
    </div>
  );
};

export default About;
