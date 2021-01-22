import React, { useState, useEffect } from 'react'
import ProjectCard from '../ProjectCard'
import SearchBox from '../SearchBox'
import axios from 'axios'

const ProjectList = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    dataFetch()
  }, [])

  const dataFetch = () => {
    const query = `{
      repositories {
        pathname
        issues {
          title
        }
      }
    }`

    axios.get(`http://localhost:8080/graphql?query=${query}`).then((res) => {
      const { repositories } = res.data.data
      setRepositories(repositories)
    })
  }

  return (
    <div className='w-full'>
      <SearchBox
        placeholder='Search Projects...'
      />
      <div className='flex'>
        {repositories.map((data, index) => (
          <ProjectCard key={index} repository={data} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
