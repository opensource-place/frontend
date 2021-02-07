import styled from 'styled-components'

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background: #303132;
  margin-top: auto;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(139, 255, 234, 0.2) 100%);
`
const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif !important;
  color: '#21403A';
  width: 1rem;
`

const Link = styled.button`
  text-decoration: none;
  margin-left: 2%;
  font-size: 1.5rem;
  font-weight: 500;
  font-style: normal;
  color: rgb(75, 125, 116);
  padding: 1rem;
  &:hover {
    color: rgb(33, 64, 58);
  }
`
const Menus = styled.div`
  display: flex;
`
const Img = styled.img`
  width: 10em;
  height: 10em;
`
const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #4b7d74;
`

export { Container, Img, Wrapper, Link, Menus, Text }
