import React, { useState } from 'react'
import { NavBar } from '../components'
import axios from 'axios'
import { MainContainer, Containerx } from './style'
import styled from 'styled-components'
import { computer } from '../assets'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  padding: 1rem;
`

const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroTitle = styled.h1`
  font-size: 3rem;
  background: -webkit-linear-gradient(
    331deg,
    rgba(168, 169, 61, 1) 0%,
    rgba(84, 172, 152, 1) 73%,
    rgba(99, 208, 171, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const HeroTitleContent = styled.p`
  display: flex;
  font-size: 1.1rem;
  line-height: 1.4;
  color: rgba(20, 120, 102, 60%);
`
const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`
const CustomButton = styled.button`
  margin-top: 2rem;
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

const Input = styled.input`
  width: 60%;
  height: 5rem;
  background-color: #fff;
  padding: 2rem 6rem;
  border-radius: 8px;
  border: 1px solid #63d0ab;
  transition: all 0.15s;
`
const HeroTitleContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0 2rem 0;
`

const HeroTitleContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  width: 60%;
`

const HeroTitleContentLeft = styled.div`
  display: flex;
  width: 40%;
`

const Start = () => {
  const [issue, setIssue] = useState('')
  const [loading, setLoading] = useState(false)

  const addIssue = async (e) => {
    const url = process.env.REACT_APP_API_URL
    setLoading(true)
    await axios
      .post(`${url}/repository`, {
        url: issue
      })
      .catch((err) => {
        console.log(err)
        setIssue('')
        setLoading(false)
      })
    setIssue('')
    setLoading(false)
  }

  return (
    <>
      <NavBar />
      <Containerx>
        <MainContainer>
          <Background>
            <ContentTop>
              <HeroTitle>HOW SHOULD YOU ADD THE PROJECT</HeroTitle>
            </ContentTop>
            <HeroTitleContentContainer>
              <HeroTitleContentLeft>
                <img src={computer} width="auto" height="250" />
              </HeroTitleContentLeft>
              <HeroTitleContentRight>
                <HeroTitleContent>🛸 Our recommended repository should be</HeroTitleContent>
                <HeroTitleContent>
                  🛸 Must have a repository readme Issues should be
                </HeroTitleContent>
                <HeroTitleContent>
                  🛸 opened and labeled The url of the Github repository must be added from below
                </HeroTitleContent>
              </HeroTitleContentRight>
            </HeroTitleContentContainer>
            <ContentBottom>
              {loading
                ? (
                <ContentBottom>
                  <p>Loading</p>
                </ContentBottom>
                  )
                : (
                <ContentBottom>
                  <Input
                    type="text"
                    onChange={(e) => setIssue(e.target.value)}
                    value={issue}
                    placeholder="GitHub Repository URL (https://github.com/opensource-place/frontend)"
                  />
                  <CustomButton onClick={addIssue} type="Submit">
                    Add Project
                  </CustomButton>
                </ContentBottom>
                  )}
            </ContentBottom>
          </Background>
        </MainContainer>
      </Containerx>
    </>
  )
}

export default Start
