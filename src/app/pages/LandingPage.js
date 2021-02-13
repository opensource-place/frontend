import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, NavBar, StyledButton } from '../components'
import { Center, Container } from './style'
import styled from 'styled-components'
import { front } from '../assets'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 800px;
`
const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 600px;
  margin-left: 100px;
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 600px;
`
const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: #222;
`
const HeroTitleContent = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: #555;
`
const ButtonLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 430px;
`

const LandingPage = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Center>
          <Header>
            <HeaderLeft>
              <HeroTitle>A project platform for the worlds open source supports</HeroTitle>
              <HeroTitleContent>
                The platform includes open source projects. You can list all published open-source
                projects and also add your project on Github to the platform and your projects make
                open source!
              </HeroTitleContent>
              <ButtonLeft>
                <Link to="/start">
                  <StyledButton
                    landing
                    fontSize="18px"
                    border="0px"
                    color="#000"
                    height="44px"
                    width="160px"
                    radius="15px"
                  >
                    Add Project
                  </StyledButton>
                </Link>
              </ButtonLeft>
            </HeaderLeft>
            <HeaderRight>
              <img width="auto" height="500" src={front} />
            </HeaderRight>
          </Header>
        </Center>
        <Footer />
      </Container>
    </>
  )
}

export default LandingPage
