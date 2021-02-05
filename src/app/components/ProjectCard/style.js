import styled from 'styled-components'

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    height: 28rem;
    width: 18rem;
  }

  @media screen and (min-width: 768px) {
    height: 28rem;
    width: 18rem;
  }

  @media screen and (min-width: 320px) {
    height: 29rem;
    width: 18rem;
    top: 1rem;
  }
  display: flex;
  flex-direction: column;
  border: 1px solid #4b7d74;
  border-radius: 30px;
  justify-content: space-between;
  margin: 1rem 1rem;
`

const Text = styled.h1`
  font-size: 1rem;
  color: #000;
  margin-top: 10px;
`
const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100px;
  width: 100%;
`
const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
`

export { Container, Text, TopDiv, BottomDiv }
