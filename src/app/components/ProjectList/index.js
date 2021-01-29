import React from 'react'
import { SearchBox, ProjectCard } from '../../components'
import { useSelector } from 'react-redux'

const ProjectList = () => {
  const { projects } = useSelector((state) => state.projects)

  return (
    <div>
      <SearchBox placeholder="Search Projects..." />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {projects.map((data, index) => (
          <div key={index}>
            <ProjectCard repository={data.pathname} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
