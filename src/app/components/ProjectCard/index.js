import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Text, TopDiv } from './style'
import { StyledButton } from '../index'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { Chart, Tooltip, Interval } from 'bizcharts'

const data = [
  { year: 'javascript', issue: 20 },
  { language: 'golang', issue: 52 }

]
const ProjectCard = ({ repository }) => {
  const path = `/project${repository}`
  return (
    <Container>
      <TopDiv>
        <div style={{ width: 112.98, height: 112.98, marginTop: 30 }}>
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
          <div style={{ marginBottom: 5, marginTop: 5 }}>
            <Chart height={200} width={100} autoFit data={data} padding="auto">
              <Interval position="year*sales" color="#58C2AE" />
              <Tooltip shared />
            </Chart>
          </div>

        </div>
      </TopDiv>
    </Container >
  )
}

export default ProjectCard
