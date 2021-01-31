import React from 'react'
import { Container, TopDiv } from './style'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

const Progressbar = ({ repository }) => {
  const len = repository.issues
  const progress = len.length * 3.3
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
              <strong>{len.length}</strong> <br />
              issues
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </TopDiv>
    </Container>
  )
}

export default Progressbar
