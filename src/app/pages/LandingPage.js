/* eslint-disable */
import React from "react";
import { Footer, NavBar, StyledButton, ProjectCard } from "../components";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderUp = styled.div`
  margin: 10%;
  padding: 2em;
  background-color: #1fb79b;
  border-radius: 1em;
  text-align: center;
`;

const Invite = styled.div`
    margin-top 1em;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
`;

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeaderUp>
        <h2>
          The platform includes open source projects. You can list all published
          open-source projects and also add your project on Github to the
          platform and your projects make open source!
        </h2>
        <Invite>
          <a href="https://github.com/FurkanPortakal/opensourceadam">
            Feel free to contribute!
          </a>
          <Center>
            <Link to="/start">
              <StyledButton easy height="10px">
                Start
              </StyledButton>
            </Link>
          </Center>
        </Invite>
      </HeaderUp>
      <Center>
        {/* <ProjectCard /> */}
      </Center>
      <Footer />
    </div>
  );
};

export default LandingPage;
