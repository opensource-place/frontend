import React from 'react'
import { ProjectCard, ProjectList, NavBar, Footer } from '../components/'

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1>Project List</h1>
        <ProjectList />
        <div></div>
      </div>
      <ProjectCard />
      <Footer />
    </div>
  )
}

export default Projects
