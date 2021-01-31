import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Text, TopDiv } from './style'
import { StyledButton, Progressbar } from '../index'

const ProjectCard = ({ repository }) => {
  const path = `/project${repository.pathname}`
  const pathx = path.split('/')
  return (
    <Container>
      <Progressbar issues={repository.issues} />
      <TopDiv>
        <Text>
          {pathx[2]}📌{pathx[3]}
        </Text>
        <Link to={path}>
          <StyledButton>Details</StyledButton>
        </Link>
      </TopDiv>
    </Container>
  )
}

export default ProjectCard
