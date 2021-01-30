import styled from 'styled-components'

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    width: 150px;
  }

  @media screen and (min-width: 768px) {
    width: 100vw;
  }

  @media screen and (min-width: 320px) {
    width: 100vw;
  }
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`

const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 190px;
  width: 540px;
  border: 1px solid black;
  color: white;
`
const Issues = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  border: 1px solid black;
`

export { Container, Issues, Details }
