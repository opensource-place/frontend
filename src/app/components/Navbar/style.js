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
  background-color: rgba(0, 0, 0, 0.05);
  @media screen and (min-width: 1024px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 320px) {
    width: 100%;
  }
`
const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const LogoAndText = styled.div`
  display: flex;
  align-items: center;
`
const Menus = styled.div`
  margin-right: 5px;
  display: flex;
  margin-left: auto;
`
const NavItem = styled.div`
  margin-left: 10px;
  color: '#1FB79B' !important;
`
const NavTitle = styled.div`
  margin-left: 10px;
  font-size: 18px;
  color: #1fb79b;
`

export { Container, Wrapper, ItemsWrapper, LogoAndText, Menus, NavItem, NavTitle }
