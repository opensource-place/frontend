import React from 'react'
import { Footer, NavBar } from '../components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderUp = styled.div`
    margin: 10%;
    padding: 2em;
    background-color: #1FB79B;
    border-radius: 1em;
    text-align: center;
`

const Invite = styled.div`
    margin-top 1em;
`
const PrimaryButton = styled.div`
    padding: .2em;
    baclground-color:
`

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeaderUp>
        <h2>
          The platform includes open source projects. You can list all published
          open-source projects and also add your project on Github to the
          platform and your projects make open source!
        </h2>
        <Invite>
          <a
            href='https://github.com/FurkanPortakal/opensourceadam'
          >
            Feel free to contribute!
          </a>
        <Link to='/start'>
          <PrimaryButton>
            <button>Start</button>
          </PrimaryButton>
        </Link>
        </Invite>
      </HeaderUp>
      <Footer />
    </div>
  )
}

export default LandingPage
