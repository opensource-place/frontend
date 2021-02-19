import React from 'react'
import { NavBar } from '../components'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify: center;
  width: 100%;
  height: 90vh;
`

const HeroTitle = styled.h1`
  width: 60%;
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  background: -webkit-linear-gradient(
    331deg,
    rgba(114, 137, 218, 1) 0%,
    rgba(84, 172, 152, 1) 73%,
    rgba(99, 208, 171, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const HeroTitleContent = styled.p`
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.4;
  width: 50%;
  color-opaticy: 10%;
  color: #72aea3;
  margin-bottom: 3rem;
`

const Soon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const Start = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Soon>
          <HeroTitle>You can join this channel to communicate with each other.</HeroTitle>
          <HeroTitleContent>
            Do you want to be a mentor & mentee while creating projects or contributing? So you
            gotta jump on our discord channel
          </HeroTitleContent>
          <iframe
            src="https://discord.com/widget?id=786277089577402418&amp;theme=dark"
            width="450"
            height="400"
            allowTransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </Soon>
      </Container>
    </>
  )
}

export default Start
