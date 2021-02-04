import React from 'react'
import { Container, TopDiv, Text, LengthText } from './style'
import {
  buildStyles,
  CircularProgressbarWithChildren
} from 'react-circular-progressbar'

const Progressbar = ({ issues }) => {
  const progress = issues.length
  return (
    <Container>
      <TopDiv>
        <div
          style={{
            width: 112.98,
            height: 112.98,
            marginTop: 30,
            color: 'white'
          }}
        >
          <CircularProgressbarWithChildren
            value={progress}
            style={{ pathColor: 'red' }}
            styles={buildStyles({
              pathColor: '#18CFAB',
              trailColor: '#4B7D74'
            })}
          >
            <Text>
              <LengthText>{issues.length}</LengthText>
              issues
            </Text>
          </CircularProgressbarWithChildren>
        </div>
      </TopDiv>
    </Container>
  )
}

export default Progressbar
