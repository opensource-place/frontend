import styled from 'styled-components'

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    height: 452px;
    width: 277px;
    left: 747px;
    top: 312px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    height: 452px;
    width: 277px;
  }

  @media screen and (min-width: 320px) {
    height: 452px;
    width: 277px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4b7d74;
`

const Text = styled.h1`
  font-size: 1rem;
  color: #000;
`
const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  width: 100px;
`

export { Container, Text, TopDiv }
