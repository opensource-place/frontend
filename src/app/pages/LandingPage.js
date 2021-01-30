/* eslint-disable */
import React, { useEffect } from "react";
import { Footer, NavBar, StyledButton, ProjectCard } from "../components";
import { Link } from "react-router-dom";
import Example from "../assets/example.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  HeaderUp,
  DarkenBackground,
  AddSomeMargin,
  Invite,
  Center,
  Description,
  Container,
} from "./style";
import CONSTANTS from "../redux/actions";

const LandingPage = () => {
  const { projects } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    try {
      const query = `{
        repositories {
          pathname
          issues {
            title
          }
        }
      }`;
      dispatch({ type: CONSTANTS.FETHING_PROJECTS });
      const res = await axios.get(
        `http://localhost:8080/graphql?query=${query}`
      );
      dispatch({
        type: CONSTANTS.FETCHED_PROJECTS,
        payload: res.data.data.repositories,
      });
    } catch (error) {
      dispatch({ type: CONSTANTS.ERROR });
    }
  };
  return (
    <Container>
      <NavBar />
      <HeaderUp>
        <DarkenBackground>
          <AddSomeMargin>
            <h2 style={{ color: "#444", fontWeight: "bold" }}>
              The platform includes open source projects. You can list all
              published open-source projects and also add your project on Github
              to the platform and your projects make open source!
            </h2>
            <Invite>
              <Center>
                <Link to="/start">
                  <a href="https://github.com/FurkanPortakal/opensourceadam">
                    <StyledButton
                      primary
                      border="none"
                      color="white"
                      fontWeight="bold"
                      padding="1.5rem"
                      height="10px"
                    >
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
        {projects.map((data, index) => (
          <div key={index}>
            <ProjectCard repository={data} />
          </div>
        ))}
      </Center>
      <div style={{ marginRight: 480, marginLeft: 480 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Description>
            <img width="200" height="200" src={Example} />
            <p style={{ color: "white" }}>
              Irure ad ipsum fugiat nisi ullamco ipsum ullamco anim non fugiat.
              Consectetur eu veniam sint esse commodo exercitation esse. Ex elit
              aliqua aliquip consequat eiusmod fugiat veniam labore id. Dolore
              eu voluptate Lorem eiusmod ex aliquip incididunt. Laborum enim
              adipisicing do anim esse excepteur.
            </p>
          </Description>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <Description>
            <p style={{ color: "white" }}>
              Irure ad ipsum fugiat nisi ullamco ipsum ullamco anim non fugiat.
              Consectetur eu veniam sint esse commodo exercitation esse. Ex elit
              aliqua aliquip consequat eiusmod fugiat veniam labore id. Dolore
              eu voluptate Lorem eiusmod ex aliquip incididunt. Laborum enim
              adipisicing do anim esse excepteur.
            </p>
            <img width="200" height="200" src={Example} />
          </Description>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export default LandingPage;
