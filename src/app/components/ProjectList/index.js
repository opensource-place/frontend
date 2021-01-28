import React, { useEffect } from 'react'
import { SearchBox, ProjectCard } from '../../components'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

const ProjectList = () => {
  const { projects } = useSelector((state) => state.projects)
  const dispatch = useDispatch()

  useEffect(() => {
    dataFetch()
  }, [])

  const dataFetch = async () => {
    try {
      const query = `{
        repositories {
          pathname
          issues {
            title
          }
        }
      }`
      dispatch({ type: 'FETCHING_PROJECTS' })
      const res = await axios.get(`http://localhost:8080/graphql?query=${query}`)
      dispatch({ type: 'FETCHED_PROJECTS', payload: res.data.data.repositories })
    } catch (error) {
      dispatch({ type: 'ERROR' })
    }
  }

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
