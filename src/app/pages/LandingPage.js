import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, NavBar } from '../components'
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
  margin-bottom: 15px;
`
const HeroTitleContent = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: #555;
  margin-bottom: 30px;
`
const ButtonLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 430px;
`
const CustomButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  font-size: 24px;
  background-color: #63d0ab;
  color: #fff;
  transition: all 0.15s;
  &:hover {
    background-color: #3d8069;
  }
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
                  <CustomButton>Add Project</CustomButton>
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
