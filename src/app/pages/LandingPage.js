import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, NavBar } from '../components'
import { Center, Container } from './style'
import styled from 'styled-components'
import { landing, front, details, search, issue } from '../assets'
import './style.css'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 80vh;
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
    background-color: #54ac8d;
  }
`
const Subdescription = styled.div`
  display: flex;
  padding: 5rem 0;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background: #ffffff;
  background: -webkit-linear-gradient(bottom, #ffffff, #63d0ac);
  background: -moz-linear-gradient(bottom, #ffffff, #63d0ac);
  background: linear-gradient(to top, #ffffff, #63d0ac);
`
const SubTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: rgba(0, 0, 0, 60%);
`
const Descprojectcard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-top: 4rem;
`
const DescprojectcardRight = styled.div`
  display: flex;
    justify-content:center;
    align-items:center;
    width 50%;
    margin-left: 2rem;
`
const DescprojectcardLeft = styled.div`
  display: flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    width 50%;
    `
const Soon = styled.div`
  display: flex;
  padding-top: 5rem;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20vh 0;
  width: 100%;
  height: 100%;
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
        <img src={landing} style={{ transform: 'rotate(180deg)' }} />
        <Subdescription>
          <SubTitle>Projects Easily Contribute</SubTitle>
          <Descprojectcard>
            <DescprojectcardLeft>
              <img src={details} />
            </DescprojectcardLeft>
            <DescprojectcardRight>
              <HeroTitleContent>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts and visual mockups.
              </HeroTitleContent>
            </DescprojectcardRight>
          </Descprojectcard>
          <Descprojectcard>
            <DescprojectcardLeft>
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups.
            </DescprojectcardLeft>
            <DescprojectcardRight>
              <HeroTitleContent>
                <img src={issue} />
              </HeroTitleContent>
            </DescprojectcardRight>
          </Descprojectcard>
          <Descprojectcard>
            <DescprojectcardLeft>
              <img src={search} width="auto" height="250" />
            </DescprojectcardLeft>
            <DescprojectcardRight>
              <HeroTitleContent>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                industries for previewing layouts and visual mockups.
              </HeroTitleContent>
            </DescprojectcardRight>
          </Descprojectcard>
        </Subdescription>
        <Soon>
          <HeroTitle>Lets fly to open source place</HeroTitle>
          <HeroTitleContent>For we, open source is lifestyle.</HeroTitleContent>
          <Link to="/projects">
            <CustomButton>Lets fly 🛸</CustomButton>
          </Link>
        </Soon>
        <Footer />
      </Container>
    </>
  )
}

export default LandingPage
