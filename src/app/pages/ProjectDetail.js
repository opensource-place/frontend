import React from 'react'
import { Footer, NavBar, ProjectDetailsCard } from '../components'
import { MainContainer, Containerx } from './style'

const ProjectDetail = () => {
  return (
    <>
      <NavBar />
      <Containerx>
        <MainContainer>
          <ProjectDetailsCard />
        </MainContainer>
      </Containerx>
      <Footer />
    </>
  )
}

export default ProjectDetail
