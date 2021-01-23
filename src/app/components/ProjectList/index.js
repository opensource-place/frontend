import React, { useState, useEffect } from 'react'
import ProjectCard from '../ProjectCard'
import SearchBox from '../SearchBox'
import axios from 'axios'

const ProjectList = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    dataFetch()
  }, [])

  const dataFetch = async () => {
    const query = `{
      repositories {
        pathname
        issues {
          title
        }
      }
    }`

    const res = await axios.get(`/graphql?query=${query}`)
    setRepositories(res.data.data.repositories)
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
