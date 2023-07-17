import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
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
    <div className="container" style={{
      alignItems: "center",
    }}>
      <nav className="navbar">
        <NavUnlisted>
          <div
            className="row"
            style={{
              height: "8vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="three columns" style={{marginTop:"10px"}}>
              <h2>Alex Zhu</h2>
            </div>
            <div className="three columns">
              <p></p>
            </div>
            <div
              className="six columns"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <StyledLink to="/">Home</StyledLink>

              <StyledLink to="/about">About</StyledLink>

              <StyledLink to="/resume">Resume</StyledLink>

              <StyledLink to="/skills">Skills</StyledLink>

              <StyledLink to="/projects">Projects</StyledLink>
            </div>
          </div>
        </NavUnlisted>
      </nav>
    </div>
  );
};

export default Navbar;
