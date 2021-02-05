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
  Language,
  BottomDiv,
  Readme,
  Text,
  Label
} from './style'
import { useParams } from 'react-router-dom'
import { Progressbar, StyledButton } from '../index'
import axios from 'axios'
import { Fork, View, Star } from '../../assets'
import Markdown from 'markdown-to-jsx'

function ProjectDetail () {
  const { projectname, reponame } = useParams()
  const [issues, setIssues] = useState([])
  const [repo, setRepo] = useState([])
  const [content, setContent] = useState('')

  useEffect(() => {
    projectFetch()
    getMarkdown()
  }, [])

  const findDate = (datex) => {
    if (!datex) return 'invalid time error'
    const dayConvert = 1000 * 3600 * 24
    const milisaniye = new Date(datex).getTime()
    const sonuc = Date.now() - milisaniye
    const gunHesapla = Math.ceil(sonuc / dayConvert)
    return gunHesapla
  }

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

    const repos = `{
    repository(pathname:"/${projectname}/${reponame}"){
      pathname
      forks_count
      stargazers_count
      contributors{
        avatar_url
      }
     }
    }`

    const res = await axios.get(`http://localhost:8080/graphql?query=${query}`)
    setIssues(res.data.data.issues)

    const repox = await axios.get(`http://localhost:8080/graphql?query=${repos}`)
    setRepo(repox.data.data.repository)
  }

  const getMarkdown = async () => {
    const res = await axios.get(
      `https://raw.githubusercontent.com/${projectname}/${reponame}/master/README.md`
    )
    setContent(await res.data)
  }

  console.log(issues)

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
            <DetailsRightText>{repo.stargazers_count}</DetailsRightText>
          </DetailsRightRow>
          <DetailsRightRow>
            <img src={Fork} />
            <DetailsRightText>{repo.forks_count}</DetailsRightText>
          </DetailsRightRow>
        </DetailsRight>
      </Details>
      <Issues>
        {issues.map((item, i) => (
          <IssuesDetail key={i}>
              <Label>
                    <StyledButton issue border="0px" margin="3px" radius="30px" color="#fff" width="124px" fontSize="12px" height="24px">good first issue</StyledButton>
                    <StyledButton dublicate border="0px" radius="30px" color="#fff" width="124px" fontSize="12px" height="24px">dublicate</StyledButton>
                  </Label>
                <a href={item.html_url}>
                  <Text>{item.title}</Text>
                </a>
                <Text>#78, {findDate(item.created_at)} days, by furkanportakal </Text>
              </IssuesDetail>
        ))}
          </Issues>
          <BottomDiv>
            <Readme>
              <Markdown>{content}</Markdown>
            </Readme>
            <Readme>
              <h1>Where does it come from?</h1>
              {issues.map((item, i) => (
                <IssuesDetail key={i}>
                  <a href={item.html_url}>
                    <Text>{item.title}</Text>
              </a>
                <Text>#78, {findDate(item.created_at)} days, by furkanportakal </Text>
            </IssuesDetail>
              ))}
        </Readme>
      </BottomDiv>
    </Container>
  )
}

export default ProjectDetail
