import React from 'react'
import { Container, Text } from './style'
import { CircularProgressbar } from 'react-circular-progressbar'

const ProjectCard = () => {
  const value = 0.66
  return (
    <Container>
      <Text>Hello Open Source!</Text>
      <CircularProgressbar
        value={value}
        maxValue={1}
        text={`${value * 100}%`}
      />
    </Container>
  )
}

export default ProjectCard
