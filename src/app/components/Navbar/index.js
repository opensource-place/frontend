import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
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
    margin-left: 0.5rem;
`

export const NavBar = () => (
  <Wrapper>
    <Navbar>
      <ItemsWrapper>
        <Link to='/'>
          <LogoAndText>
            <img width='50px' src='/logo2.png' alt='Our Logo' />
            <h1 className='hover:text-green-500 hidden md:block'>
              Opensource.place
            </h1>
          </LogoAndText>
        </Link>
        <Menus id='mobileMenu'>
          <Link to='/projects' className='ml-3'>
            Projects
          </Link>
          <Link to='/doc' className='ml-3'>
            Documents
          </Link>
          <Link to='/login' className='ml-3 primary-button'>
            Login
          </Link>
        </Menus>
      </ItemsWrapper>
    </Navbar>
  </Wrapper>
)

export default NavBar
