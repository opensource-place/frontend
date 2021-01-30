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
  padding: 12px;
  width: 100%;
  background-color: #242526;
  box-shadow: 4px 4px 11px rgba(0, 0, 0, 0.15);
`

export const NavBar = () => (
  <Wrapper>
    <Navbar>
      <ItemsWrapper>
        <Link to="/">
          <LogoAndText>
            <img width="35px" src="/logo.png" alt="Our Logo" />
            <NavTitle>OpenSource.place</NavTitle>
          </LogoAndText>
        </Link>
        <Menus id="mobileMenu">
          <NavItem>
            <Link to="/projects" style={{ color: '#1FB79B' }}>
              Projects
            </Link>
          </NavItem>
          <NavItem>
            <a
              href="https://docs.opensource.place/"
              style={{ color: '#1FB79B' }}
            >
              Documents
            </a>
          </NavItem>
        </Menus>
      </ItemsWrapper>
    </Navbar>
  </Wrapper>
)

export default NavBar
