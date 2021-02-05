import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Text, TopDiv, BottomDiv } from './style'
import { StyledButton, Progressbar } from '../index'
import { ResponsiveBar } from '@nivo/bar'

const ProjectCard = ({ repository }) => {
  const data = [
    {
      JavaScript: 153,
      HTML: 31,
      CSS: 147,
      Python: 18,
      Java: 109
    }
  ]
  const path = `/project${repository.pathname}`
  const pathx = path.split('/')
  return (
    <Container>
      <TopDiv>
        <Progressbar issues={repository.issues} />
        <Text>{pathx[3]}</Text>
      </TopDiv>
      <ResponsiveBar
        data={data}
        keys={['JavaScript', 'HTML', 'CSS', 'Python', 'Java']}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        innerPadding={6}
        padding={0.0}
        groupMode="grouped"
        valueScale={{ type: 'symlog' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'green_blue' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'fries'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'sandwich'
            },
            id: 'lines'
          }
        ]}
        borderRadius={1.5}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridY={false}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
      <BottomDiv>
        <Link to={path}>
          <StyledButton primary>Details</StyledButton>
        </Link>
      </BottomDiv>
    </Container>
  )
}

export default ProjectCard
