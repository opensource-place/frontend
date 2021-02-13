/*eslint-disable*/
import React from 'react'
import { NavBar, Footer, ProjectCard } from '../components/'

import { SearchBox, InstantSearch, Hits, RefinementList } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import './style.css'

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_KEY_ONE,
  process.env.REACT_APP_ALGOLIA_KEY_TWO
)

const Projects = () => {
  return (
    <>
      <NavBar />
      <div className="ais-InstantSearch">
        <InstantSearch indexName="repository" searchClient={searchClient}>
          <div className="left-panel">
            <SearchBox />
            <RefinementList attribute="brand" />
          </div>
          <div className="right-panel">
            <Hits className="ais-Hits-list" hitComponent={ProjectCard}></Hits>
          </div>
        </InstantSearch>
      </div>
      <Footer />
    </>
  )
}

export default Projects
