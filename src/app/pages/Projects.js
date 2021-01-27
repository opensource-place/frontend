/* eslint-disable */
import React from 'react'
import { ProjectList, NavBar, Footer } from '../components/'

const Projects = () => {
  return (

    <div>
      <NavBar />
      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        <h1>Project List</h1>
        <div >
          <ProjectList />
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Projects
