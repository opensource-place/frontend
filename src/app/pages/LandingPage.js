import React from 'react'
import { Footer, NavBar, StyledButton, ProjectCard } from '../components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Example from '../assets/example.svg'
import { useSelector } from 'react-redux'

const Container = styled.div`
justify-content: space-between;
min-height: 100vh;
background-color: 'red';
`
const LandingPage = () => {
  const { projects } = useSelector((state) => state.projects)

  return (
    <Container>
      <NavBar />
      <HeaderUp>
        <DarkenBackground>
          <AddSomeMargin>
            <h2 style={{ color: '#444', fontWeight: 'bold' }}>
              The platform includes open source projects. You can list all published
              open-source projects and also add your project on Github to the
              platform and your projects make open source!
            </h2>
            <Invite>
              <Center>
                <Link to="/start">
                  <a href="https://github.com/FurkanPortakal/opensourceadam">
                    <StyledButton primary border="none" color="white" fontWeight="bold" padding="1.5rem" height="10px">
                      Feel free to contribute!
                    </StyledButton>
                  </a>
                </Link>
              </Center>
            </Invite>
          </AddSomeMargin>
        </DarkenBackground>
      </HeaderUp>
      <Center>
      {projects.map((data, index) => (
          <div key={index}>
            <ProjectCard repository={data.pathname} />
          </div>
      ))}
      </Center>
      <div style={{ marginRight: 480, marginLeft: 480 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <Description>
            <img width="200" height="200" src={Example} />
            <p style={{ color: 'white' }}>Irure ad ipsum fugiat nisi ullamco ipsum ullamco anim non fugiat. Consectetur eu veniam sint esse commodo exercitation esse. Ex elit aliqua aliquip consequat eiusmod fugiat veniam labore id. Dolore eu voluptate Lorem eiusmod ex aliquip incididunt. Laborum enim adipisicing do anim esse excepteur.</p>
          </Description>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
          <Description>
            <p style={{ color: 'white' }}>Irure ad ipsum fugiat nisi ullamco ipsum ullamco anim non fugiat. Consectetur eu veniam sint esse commodo exercitation esse. Ex elit aliqua aliquip consequat eiusmod fugiat veniam labore id. Dolore eu voluptate Lorem eiusmod ex aliquip incididunt. Laborum enim adipisicing do anim esse excepteur.</p>
            <img width="200" height="200" src={Example} />

          </Description>
        </div>
      </div>

      <Footer />
    </Container >
  )
}

const HeaderUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    height: 50%;
  }

  @media screen and (min-width: 768px) {
    height: 50%;
  }

  @media screen and (min-width: 320px) {
    height: 50%;
  }
  background: url('https://image.freepik.com/free-vector/mars-landscape-alien-planet-martian-background_107791-1781.jpg') no-repeat center/cover;
  text-align: center;
`

const Invite = styled.div`
  margin-top:  1em;
`
const Description = styled.div`
  width: 612px;
  height: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;

`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  flex-direction: row;
  @media screen and (min-width: 1024px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 320px) {
    width: 100%;
  }
`

const DarkenBackground = styled.div`
  width: 100%;
  height: 100%;
`

const AddSomeMargin = styled.div`
  margin: 5em;
  padding: 25px;
  background: rgba(255, 255, 255, .15);
  border-radius: 5px;
`

export default LandingPage
