import React from 'react'
import { Container, Text, TopDiv } from './style'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

const ProjectCard = ({ repository }) => {
  console.log(repository)
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
        </div>
      </TopDiv>
    </Container>
  )
}

export default ProjectCard
