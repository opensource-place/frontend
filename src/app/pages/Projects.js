import React from 'react'
import { ProjectList, NavBar, Footer, SearchBoxx } from '../components/'
import styled from 'styled-components'
import { Containerx, MainContainer } from './style'

const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Projects = () => {
  return (
    <>
      <NavBar />
      <Containerx>
        <MainContainer>
          <Search>
            <SearchBoxx />
          </Search>
          <ProjectList />
        </MainContainer>
      </Containerx>
      <Footer />
    </>
  )
}

export default Projects
