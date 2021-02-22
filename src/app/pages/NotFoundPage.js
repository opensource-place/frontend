import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components'
import styled from 'styled-components'
import { IssuesWarning } from '../assets'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
`
const HeroTitle = styled.h1`
  font-size: 3rem;
  background: -webkit-linear-gradient(
    331deg,
    rgba(168, 169, 61, 1) 0%,
    rgba(84, 172, 152, 1) 73%,
    rgba(99, 208, 171, 1) 100%
  );
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const HeroTitleContent = styled.p`
  display: flex;
  font-size: 1.1rem;
  line-height: 1.4;
  text-align: center;
  background: -webkit-linear-gradient(
    331deg,
    rgba(168, 169, 61, 1) 0%,
    rgba(84, 172, 152, 1) 73%,
    rgba(99, 208, 171, 1) 100%
  );
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: rgba(20, 120, 102, 60%);
`
const Icon = styled.img`
  width: auto;
  height: 200px;
  margin-bottom: 1rem;
`
const Go = styled.p`
  background-color: #0d0a0b;
  background-image: linear-gradient(
    331deg,
    rgba(168, 169, 61, 1) 0%,
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
`
const Button = styled.div`
  display: flex;
  margin: 2rem 1rem;
`

const NotFoundPage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Icon src={IssuesWarning}></Icon>
        <HeroTitle>OPPS!</HeroTitle>
        <HeroTitleContent>This page could not be found</HeroTitleContent>
        <Button>
          <Link to="/">
            <Go>Back to the home page</Go>
          </Link>
        </Button>
      </Container>
    </>
  )
}
export default NotFoundPage
