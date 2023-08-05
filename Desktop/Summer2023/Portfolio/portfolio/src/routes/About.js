const About = () => {
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
              I also hold an <span className="bold">undergraduate degree in Computer Science</span> from
              Worcester Polytechnic Institute (WPI), which provides a strong
              foundation in programming languages and concepts. Through my
              studies, I gained proficiency in Java, C++, SQL, and other
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
      <div className="skiAndSnowboard container">
        <div className="row">
          <div className="six columns">
            <h4>Ski & Snowboard</h4>
          </div>
        </div>
        <div className="row">
          <p>I love skiing and snowboarding</p>
        </div>
      </div>
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
      <div className="game container">
        <div className="row">
          <div className="three columns">
            <h4>Games</h4>
          </div>
        </div>
        <div className="row">
          <p>I love Games</p>
        </div>
      </div>
      <div className="travel container">
        <div className="row">
          <div className="three columns">
            <h4>Travel</h4>
          </div>
        </div>
        <div className="row">
          <p>I love Traveling</p>
        </div>
      </div>
    </div>
  );
};

export default About;
