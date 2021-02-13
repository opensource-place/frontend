/*eslint-disable*/
import React, { useState } from 'react'
import { NavBar } from '../components'
import axios from 'axios'
import { MainContainer, Containerx } from './style'
import styled from 'styled-components'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px 30px 0 0;
  height: 100vh;
  width: 100%;
  margin-top: 3rem;
  padding: 1rem;
  background: rgb(66, 168, 149);
  background: linear-gradient(0deg, rgba(66, 168, 149, 1) 0%, rgba(255, 255, 255, 1) 75%);
`

const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #147866;
  margin: 2rem;
`
const Underline = styled.div`
  border-bottom: solid 5px #0c5a4c;
  border-radius: 50%;
  margin: -0.512em auto;
  width: 10rem;
  margin-bottom: 1rem;
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
  margin-top: 4rem;
  width: 100%;
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
  width: 40rem;
  height: 5rem;
  background-color: #63d0ab;
  padding: 2rem 6rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.15s;
  &:hover {
    background-color: #54ac8d;
  }
`

const Start = () => {
  const [issue, setIssue] = useState('')
  // const [getDBStatus, setDBStatus] = useState(false)
  // const [getDBStatusMSG, setDBStatusMSG] = useState('')

  const addIssue = async (e) => {
    e.preventDefault()

    const url = 'http://localhost:8080'

    const res = await axios.post(`${url}/repository`, {
      url: issue
    })

    // setDBStatus(res.data.result)
    // setDBStatusMSG(res.data.msg)
  }

  return (
    <>
      <NavBar />
      <Containerx>
        <MainContainer>
          <Background>
            <ContentTop>
              <HeroTitle>HOW SHOULD YOU ADD THE PROJECT</HeroTitle>
              <Underline />
              <HeroTitleContent>Our recommended repository should be</HeroTitleContent>

              <HeroTitleContent>Must have a repository readme Issues should be</HeroTitleContent>
              <HeroTitleContent>
                opened and labeled The url of the Github repository must be added from below
              </HeroTitleContent>
            </ContentTop>
            <ContentBottom>
              <div stlye={{ width: '3rem' }}>
                <Input
                  type="text"
                  stlye={{ color: 'red' }}
                  onChange={(e) => setIssue(e.target.value)}
                  placeholder="GitHub Repository URL (opensourceadam-place/wiki)"
                  name="note"
                />
              </div>
              <CustomButton onClick={addIssue} type="Submit">
                Add Project
              </CustomButton>
            </ContentBottom>
          </Background>
        </MainContainer>
      </Containerx>
    </>
  )
}

export default Start
