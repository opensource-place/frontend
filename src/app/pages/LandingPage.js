/* eslint-disable */
import React from "react";
import { Footer, NavBar, StyledButton, ProjectCard } from "../components";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeaderUp>
        <DarkenBackground>
          <AddSomeMargin>
            <h2 style={{ color: '#444', fontWeight: 'bold' }}>
              The platform includes open source projects. You can list all published
              open-source projects and also add your project on Github to the
              platform and your projects make open source!
            </h2>
            <Invite>
              <Center>
                <Link to="/start">
                  <a href="https://github.com/FurkanPortakal/opensourceadam">
                    <StyledButton primary border="none" color="white" fontWeight="bold" padding="1.5rem" height="10px">
                      Feel free to contribute!
                    </StyledButton>
                  </a>
                </Link>
              </Center>
            </Invite>
          </AddSomeMargin>
        </DarkenBackground>
      </HeaderUp>
      <Center>
        {/* <ProjectCard /> */}
      </Center>
      <Footer />
    </div>
  );
};

const HeaderUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('https://image.freepik.com/free-vector/mars-landscape-alien-planet-martian-background_107791-1781.jpg') no-repeat center/cover;
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

const DarkenBackground = styled.div`
  width: 100%;
  height: 100%;
`

const AddSomeMargin = styled.div`
  margin: 5em;
  padding: 25px;
  background: rgba(255, 255, 255, .15);
  border-radius: 5px;
`

export default LandingPage;
