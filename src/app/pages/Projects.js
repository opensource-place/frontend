import React from 'react'
import { ProjectCard, ProjectList, NavBar } from '../components/'

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div >
        <h1>Project List</h1>
        <ProjectList />
        <div>
        </div>
      </div>
      <ProjectCard/>
    </div>
  )
}

export default Projects
