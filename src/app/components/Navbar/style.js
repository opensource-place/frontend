import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  position: fixed;
  bottom: 0;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fff;
`
const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const LogoAndText = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 30px;
`
const Menus = styled.div`
  margin-right: 5px;
  display: flex;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding-top: 25px;
    justify-content: center;
    flex-wrap: wrap;
  }
`
const NavItem = styled.div`
  margin-left: 25px;
  color: '#1FB79B' !important;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`
const NavTitle = styled.div`
  margin-left: 10px;
  font-size: 18px;
  color: #1fb79b;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`

export { Container, Wrapper, ItemsWrapper, LogoAndText, Menus, NavItem, NavTitle }
