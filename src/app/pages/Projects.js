/*eslint-disable*/
import React from 'react'
import { NavBar, Footer, ProjectCard } from '../components/'
import { MainContainer, Containerx } from './style'

import {
  SearchBox,
  InstantSearch,
  Hits,
  RefinementList,
  Configure,
  Pagination
} from 'react-instantsearch-dom'
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
      <Containerx>
        <MainContainer>
          <div className="ais-InstantSearch">
            <InstantSearch indexName="repository" searchClient={searchClient}>
              <div className="left-panel">
                <div>
                  <SearchBox placeholder="Search for issue" />
                </div>

                <div className="refimentList">
                  <p style={{ opacity: 0.25, fontWeight: 700, letterSpacing: '1px' }}>
                    ~ Search by labels name ~
                  </p>
                  <RefinementList attribute="issues.labels.name" />
                </div>
                <Configure hitsPerPage={9} />
              </div>
              <div className="right-panel">
                <Hits className="ais-Hits-list" hitComponent={ProjectCard}></Hits>
                <Pagination></Pagination>
              </div>
            </InstantSearch>
          </div>
        </MainContainer>
      </Containerx>
      <Footer />
    </>
  )
}

export default Projects
