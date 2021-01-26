import React from 'react'
import { Container, Text, topDiv } from './style'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

const ProjectCard = () => {
  return (
    <Container>
      <topDiv>
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
        </div>
        <Text>open source place</Text>
      </topDiv>
    </Container>
  )
}

export default ProjectCard
