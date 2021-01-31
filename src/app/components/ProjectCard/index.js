/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { Container, Text, TopDiv } from "./style";
import { StyledButton, Progressbar } from "../index";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const ProjectCard = ({ repository }) => {
  const path = `/project${repository.pathname}`;
  const pathx = path.split("/");
  const len = repository.issues;
  const progress = len.length * 3.3;
  return (
    <Container>
      <Progressbar repository={repository} />
      <TopDiv>
        <Text>
          {pathx[2]}📌{pathx[3]}
        </Text>
        <Link to={path}>
          <StyledButton>Details</StyledButton>
        </Link>
      </TopDiv>
    </Container>
  );
};

export default ProjectCard;
