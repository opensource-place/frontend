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
    align-items: flex-start;
    margin-right: 1rem;
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
  border: thick solid #4B7D74;
`

const Text = styled.h1`
  font-size: 1rem;
  color: white;
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
