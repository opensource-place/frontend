import React from 'react'
import { NavBar, Footer, ProjectCard } from '../components/'

import { Containerx, MainContainer } from './style'
import { SearchBox, InstantSearch, Hits } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_KEY_ONE,
  process.env.REACT_APP_ALGOLIA_KEY_TWO
)

const Projects = () => {
  return (
    <>
      <NavBar />
      <Containerx>
        <MainContainer>
          <InstantSearch indexName="repository" searchClient={searchClient}>
            <SearchBox />
            <Hits hitComponent={ProjectCard}></Hits>
          </InstantSearch>
        </MainContainer>
      </Containerx>
      <Footer />
    </>
  )
}

export default Projects
