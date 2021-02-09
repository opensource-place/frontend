import React, { useEffect } from 'react'
import { ProjectCard } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import CONSTANTS from '../../redux/actions'
import axios from 'axios'
import { createFilter } from 'react-search-input'

const ProjectList = () => {
  /*eslint-disable */
  const { projects, filter } = useSelector((state) => state.projects)

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
      dispatch({ type: CONSTANTS.FETHING_PROJECTS })
      const res = await axios.get(`http://localhost:8080/graphql?query=${query}`)
      dispatch({
        type: CONSTANTS.FETCHED_PROJECTS,
        payload: res.data.data.repositories
      })
    } catch (error) {
      dispatch({ type: CONSTANTS.ERROR })
    }
  }
  console.log(filter)
  const KEYS_TO_FILTERS = ['pathname']
  const filteredProjects = projects.filter(createFilter(filter, KEYS_TO_FILTERS))
  console.log(filteredProjects)

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {filteredProjects.map((data, index) => (
          <div key={index}>
            <ProjectCard repository={data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
