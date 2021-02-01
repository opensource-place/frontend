import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 320px) {
  }
`

const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4b7d74;
  border-radius: 30px;
  color: white;
  padding: 1rem;
  margin: 125px 0 79px;
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
  width: 540px;
  margin: 5.5px;
  border-radius: 30px;
`

export { Container, Issues, Details, IssuesDetail }
