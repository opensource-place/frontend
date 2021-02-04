import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Text, TopDiv, BottomDiv } from './style'
import { StyledButton, Progressbar } from '../index'

const ProjectCard = ({ repository }) => {
  const path = `/project${repository.pathname}`
  const pathx = path.split('/')
  return (
    <Container>
      <TopDiv>
        <Progressbar issues={repository.issues} />
        <Text>{pathx[3]}</Text>
      </TopDiv>
      <BottomDiv>
        <Link to={path}>
          <StyledButton primary>Details</StyledButton>
        </Link>
      </BottomDiv>
    </Container>
  )
}

export default ProjectCard
