import React from 'react'
import { Container, TopDiv } from './style'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

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
          <CircularProgressbarWithChildren value={progress}>
            <div
              style={{
                fontSize: 12,
                marginTop: -5,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <strong>{issues.length}</strong> <br />
              issues
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </TopDiv>
    </Container>
  )
}

export default Progressbar
