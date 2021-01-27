import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Wrapper,
  ItemsWrapper,
  LogoAndText,
  Menus,
  NavItem,
  NavTitle
} from './style'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavBar = () => (
  <Wrapper>
    <Navbar>
      <ItemsWrapper>
        <Link to="/">
          <LogoAndText>
            <img width="60x" src="/logo.png" alt="Our Logo" />
            <NavTitle>Opensource.place</NavTitle>
          </LogoAndText>
        </Link>
        <Menus id="mobileMenu">
          <NavItem>
            <Link to="/projects">Projects</Link>
          </NavItem>
          <NavItem>
            <a href="https://docs.opensource.place/">Documents</a>
          </NavItem>
        </Menus>
      </ItemsWrapper>
    </Navbar>
  </Wrapper>
)

export default NavBar
