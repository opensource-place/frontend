import React from 'react'
import { ProjectList, NavBar, Footer, SearchBox } from '../components/'
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
            <SearchBox />
          </Search>
          <ProjectList />
        </MainContainer>
      </Containerx>
      <Footer />
    </>
  )
}

export default Projects
