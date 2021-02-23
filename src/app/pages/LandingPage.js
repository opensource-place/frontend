import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, NavBar } from '../components'
import { Center, Container } from './style'
import styled from 'styled-components'
import { landing, front, details, search, issue } from '../assets'
import './style.css'

const Header = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 68%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0px 15px;
    padding: 30px 0px;
    width: 100%;
  }
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 2rem;

  @media screen and (max-width: 768px) {
    margin: 2rem;
    align-items: center;
  }
`
const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50%;
`
const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: #222;
  margin-bottom: 15px;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    text-align: center;
    line-height: 2rem;
  }
`
const ButtomTitle = styled.h1`
  text-align: center;
  font-size: 56px;
  font-weight: 700;
  color: #222;
  margin-bottom: 15px;
  text-transform: capitalize;
`
const HeroTitleContent = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: #555;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    text-align: justify;
  }
`
const ButtonLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 430px;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
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
  margin-top: -2px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  background: -webkit-linear-gradient(bottom, #ffffff, #63d0ac);
  background: -moz-linear-gradient(bottom, #ffffff, #63d0ac);
  background: linear-gradient(to top, #ffffff, #63d0ac);

  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`
const SubTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: rgba(0, 0, 0, 60%);
  letter-spacing: 2px;
  word-spacing: 5px;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 30px;
  }
`
const Descprojectcard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-top: 8rem;
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
    width: 100%;
    flex-direction: column;

    &:nth-child(odd) {
      flex-direction: column-reverse;
    }
  }
`
const DescprojectcardRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  margin-left: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`
const DescprojectcardLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
const GreenText = styled.span`
  text-decoration: underline;
  text-decoration-color: #63d0ab;
`
const CardImg = styled.img`
  width: auto;
  height: 400px;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`

const LandingPage = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Center style={{ marginTop: '10rem' }}>
          <Header>
            <HeaderLeft>
              <HeroTitle>A project platform for the worlds open source supports</HeroTitle>
              <HeroTitleContent>
                The platform includes open source projects. You can list all published open-source
                projects and also add your project on Github to the platform and your projects make
                open source!
              </HeroTitleContent>
              <ButtonLeft>
                <Link to="/addproject">
                  <CustomButton>Add Project</CustomButton>
                </Link>
              </ButtonLeft>
            </HeaderLeft>
            <HeaderRight>
              <CardImg src={front}/>
            </HeaderRight>
          </Header>
        </Center>
        <img src={landing} style={{ transform: 'rotate(180deg)' }} />
        <Subdescription>
          <SubTitle>How It Works</SubTitle>
          <Descprojectcard>
            <DescprojectcardLeft>
              <img src={search} width="50%" />
            </DescprojectcardLeft>
            <DescprojectcardRight>
              <HeroTitleContent>
                If you want to contribute to any project by your level. You need to search first,
                take a look at projects by issue label, project language, and project name.
              </HeroTitleContent>
            </DescprojectcardRight>
          </Descprojectcard>
          <Descprojectcard>
            <DescprojectcardLeft>
              <HeroTitleContent>
                If you find the correct project for you. You can get more details by clicking the
                details button. You will see readme, issues, stats of the project.
              </HeroTitleContent>
            </DescprojectcardLeft>
            <DescprojectcardRight>
              <img src={details} width="100%" />
            </DescprojectcardRight>
          </Descprojectcard>
          <Descprojectcard>
            <DescprojectcardLeft>
              <img src={issue} width="100%" />
            </DescprojectcardLeft>
            <DescprojectcardRight>
              <HeroTitleContent>
                At the finally, if you find the best issue for you. Click the issue for start to
                solve it (redirect you to GitHub) or find another issue ⚡
              </HeroTitleContent>
            </DescprojectcardRight>
          </Descprojectcard>
        </Subdescription>
        <Soon>
          <ButtomTitle>Lets fly to <GreenText>open source place</GreenText></ButtomTitle>
          <HeroTitleContent>For us, open source is a life-style.</HeroTitleContent>
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
