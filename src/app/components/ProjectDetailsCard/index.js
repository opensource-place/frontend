import React, { useEffect, useState } from 'react'
import {
  Container,
  Issues,
  Details,
  IssuesDetail,
  DetailsRight,
  DetailsRightRow,
  DetailsRightText,
  DetailsMiddle,
  DetailsLeft,
  Language
} from './style'
import { useParams } from 'react-router-dom'
import { Progressbar } from '../index'
import axios from 'axios'
import { Fork, View, Star } from '../../assets'

function ProjectDetail () {
  const { projectname, reponame } = useParams()
  const [issues, setIssues] = useState([])

  const findDate = (datex) => {
    if (!datex) return 'invalid time error'
    const dayConvert = 1000 * 3600 * 24
    const milisaniye = new Date(datex).getTime()

    const sonuc = Date.now() - milisaniye

    const gunHesapla = Math.ceil(sonuc / dayConvert)

    return gunHesapla
  }

  useEffect(() => {
    projectFetch()
  }, [])

  const projectFetch = async () => {
    const query = `{
      issues(pathname:"/${projectname}/${reponame}") {
        html_url
        title
        created_at
        user{
            avatar_url
        }
      }
    }`

    const res = await axios.get(`http://localhost:8080/graphql?query=${query}`)
    setIssues(res.data.data.issues)
  }

  return (
    <Container>
      <Details>
        <DetailsLeft>
          <h3 style={{ color: '#4B7D74' }}>{reponame}</h3>
        </DetailsLeft>
        <DetailsMiddle>
          <Progressbar issues={issues} />
        </DetailsMiddle>
        <DetailsRight>
          <Language>JavaScript</Language>
          <DetailsRightRow>
            <img src={View} />
            <DetailsRightText>78</DetailsRightText>
          </DetailsRightRow>
          <DetailsRightRow>
            <img src={Star} />
            <DetailsRightText>78</DetailsRightText>
          </DetailsRightRow>
          <DetailsRightRow>
            <img src={Fork} />
            <DetailsRightText>78</DetailsRightText>
          </DetailsRightRow>
        </DetailsRight>
      </Details>
      <Issues>
        {issues.map((item, i) => (
          <IssuesDetail key={i}>
            <a href={item.html_url}>
              <h2>{item.title}</h2>
            </a>
            <img
              height="50px"
              width="50px"
              src={item.user.avatar_url}
              alt="The issue creator"
            />
            <h2>opened {findDate(item.created_at)} days ago </h2>
          </IssuesDetail>
        ))}
      </Issues>
    </Container>
  )
}

export default ProjectDetail
