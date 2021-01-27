import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Text, TopDiv } from './style'
import { StyledButton } from '../index'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

const ProjectCard = ({ repository }) => {
  const path = `/project${repository}`
  return (
    <Container>
      <TopDiv>
        <div style={{ width: 112.98, height: 112.98 }}>
          <CircularProgressbarWithChildren value={66}>
            <div
              style={{
                fontSize: 12,
                marginTop: -5,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <strong>66</strong> <br />
              issues
            </div>
          </CircularProgressbarWithChildren>
          <Text>{repository}</Text>
          <StyledButton>
            <Link to={path}>Details</Link>
          </StyledButton>
        </div>
      </TopDiv>
    </Container>
  )
}

export default ProjectCard
