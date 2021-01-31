import styled from 'styled-components'

const Container = styled.div`
  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 320px) {
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`

const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  color: white;
  padding: 1rem;
`
const Issues = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid black;
`

const IssuesDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  width: 37.5rem;
  margin: 1rem;
`

export { Container, Issues, Details, IssuesDetail }
