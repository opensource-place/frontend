import React from 'react'
import { NavBar } from '../components'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify: center;
  width: 100%;
  min-height: 90vh;
  margin-top: 90px;
`

const HeroTitle = styled.h1`
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
  margin-bottom: 0.2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem 1rem 0;
  }
`

const Soon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`
const Button = styled.div`
  display: flex;
  margin: 2rem 1rem;
`

const Go = styled.a`
  background-color: #0d0a0b;
  background-image: linear-gradient(
    331deg,
    rgba(114, 137, 218, 1) 0%,
    rgba(84, 172, 152, 1) 73%,
    rgba(99, 208, 171, 1) 100%
  );
  color: white;
  font-size: 1.2rem;
  padding: 10px 15px;
  border-radius: 1rem;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0px 1px 1px #ccc;
  ::hover {
    color: white !important;
  }
`

const Start = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Soon>
          <HeroTitle>
            You can join this channel <br />
            to communicate with each other.
          </HeroTitle>
          <HeroTitleContent>
            Do you want to be a mentor & mentee while creating projects or contributing? <br />
            So you gotta jump on our discord channel
          </HeroTitleContent>
          <Button>
            <Go href="https://findmentor.network">Find mentor&mentee</Go>
          </Button>
          <iframe
            src="https://discord.com/widget?id=786277089577402418&amp;theme=dark"
            width="450"
            height="400"
            allowTransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            style={{ marginBottom: '3rem', maxWidth: '80%' }}
          />
          <Footer></Footer>
        </Soon>
      </Container>
    </>
  )
}

export default Start
