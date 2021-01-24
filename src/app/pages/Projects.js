import React from 'react'
import { IssueList, ProjectList, NavBar } from '../components/'

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1>Project List</h1>
        <ProjectList />
        <div>
    <div className='min-h-screen flex flex-col dark:bg-gray-800 bg-gray-200'>
      <NavBar />
      <div className='p-4'>
        <h1 className='mb-0'>Project List</h1>
        <ProjectList />
        <div className='mt-4'>
          <IssueList
            repository_slug='ozlemts/React-Next10-Tailwind2-Starter'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
