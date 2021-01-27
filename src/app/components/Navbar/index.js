import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0,0,0, .05);
`
const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const NavBar = () => (
  <Wrapper>
    <Navbar>
      <ItemsWrapper>
        <Link to='/'>
          <LogoAndText>
            <img width='60x' src='/logo.png' alt='Our Logo' />
            <NavTitle>
              Opensource.place
            </NavTitle>
          </LogoAndText>
        </Link>
        <Menus id='mobileMenu'>
          <NavItem>
            <Link to='/projects'>
              Projects
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/doc'>
              Documents
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/login'>
              Login
            </Link>
          </NavItem>
        </Menus>
      </ItemsWrapper>
    </Navbar>
  </Wrapper>
)

export default NavBar
