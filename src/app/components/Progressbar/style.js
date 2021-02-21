import styled from 'styled-components'

const Container = styled.div`
  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 320px) {
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`

const Text = styled.div`
  height: 70%;
  width: 70%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.75rem;
  color: #333333;
  background: #f2f2f2;
  border-radius: 100%;
`
const TopDiv = styled.div``
const LengthText = styled.strong`
  display: flex;
  justify-content: center;
  font-size: 24px;
`

export { Container, Text, TopDiv, LengthText }
