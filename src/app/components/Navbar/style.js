import styled from 'styled-components'

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100vw;
  }

  @media screen and (min-width: 768px) {
    width: 100vw;
  }

  @media screen and (min-width: 320px) {
    width: 100vw;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    rgba(178, 255, 241, 0.3);
  position: fixed;
  bottom: 0;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
`
const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 100vw;
`
const LogoAndText = styled.div`
  display: flex;
  align-items: center;
`
const Menus = styled.div`
  margin-left: 5px;
  display: flex;
`
const NavItem = styled.div`
  margin-left: 10px;
`
const NavTitle = styled.div`
  margin-left: 10px;
  font-size: 24px;
`

export {
  Container,
  Wrapper,
  ItemsWrapper,
  LogoAndText,
  Menus,
  NavItem,
  NavTitle
}
