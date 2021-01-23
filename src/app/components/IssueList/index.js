import React, { useEffect, useState } from 'react'
import axios from 'axios'

const IssueList = (props) => {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    dataFetch()
  }, [])

  const dataFetch = async () => {
    const res = await axios.get(`/${props.repository_slug}/issues`)
    setIssues(res.data)
  }

  return issues.map((issue, index) => (
    <li key={index}>
      <a href={issue.html_url} className='flex-row' starget='_blank'>
        {issue.title}
      </a>
    </li>
  ))
}

export default IssueList
