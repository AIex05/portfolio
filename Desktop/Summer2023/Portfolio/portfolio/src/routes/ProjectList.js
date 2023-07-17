import { Link } from "react-router-dom";
import styled from "styled-components";
const ProjectList = ({ projects }) => {
  const NavUnlisted = styled.ul`
    text-decoration: none;
  `;
  const StyledLink = styled(Link)`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: black;
    text-decoration: none;
    align-items: center;
  `;
  return (
    <div className="project-list">
      <NavUnlisted>
        {projects.map((project) => (
          <div className="row" key={project.id}>
            <div className="two columns">
              <p></p>
            </div>
            <div className="eight columns" style={{ justifyContent: "center" }}>
              <Link to={`/projects/${project.id}`}>
                <div className="row">
                  <h2>{project.title}</h2>
                </div>
                <div className="row">
                  <div className="ten columns">
                    <p></p>
                  </div>
                  <div className="two columns">
                    <p>{project.start}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="ten columns">
                    <p></p>
                  </div>
                  <div className="two columns">
                    <p>{project.end}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="two columns">
              <p></p>
            </div>
          </div>
        ))}
      </NavUnlisted>
    </div>
  );
};

export default ProjectList;
