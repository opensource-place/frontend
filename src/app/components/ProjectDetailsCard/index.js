import React, { useEffect, useState } from 'react'
import {
  Container,
  Issues,
  Details,
  IssuesDetail,
  IssuesFull,
  IssuesDetailRigth,
  IssuesDetailLeft,
  DetailsRight,
  DetailsRightRow,
  DetailsRightText,
  DetailsMiddle,
  DetailsLeft,
  Language,
  BottomDiv,
  Readme,
  Text,
  TextB,
  Label
} from './style'
import { useParams } from 'react-router-dom'
import { Progressbar, StyledButton } from '../index'
import axios from 'axios'
import { Fork, View, Star, IssuesWarning } from '../../assets'
import Markdown from 'markdown-to-jsx'

const ProjectDetail = () => {
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
        number
        user{
        login
            avatar_url
        }
        labels{
        name
        color
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

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/graphql?query=${query}`)
    setIssues(res.data.data.issues)

    const repox = await axios.get(`${process.env.REACT_APP_API_URL}/graphql?query=${repos}`)
    setRepo(repox.data.data.repository)
  }

  const getMarkdown = async () => {
    const res = await axios.get(
      `https://raw.githubusercontent.com/${projectname}/${reponame}/master/README.md`
    )
    setContent(await res.data)
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
              {item.labels.map((label, i) => (
                <StyledButton
                  key={i}
                  bcolor={`#${label.color}`}
                  border="0px"
                  margin="3px"
                  radius="30px"
                  color="#fff"
                  width="124px"
                  fontSize="12px"
                  height="24px"
                >
                  {label.name}
                </StyledButton>
              ))}
            </Label>
            <a href={item.html_url}>
              <Text>{item.title}</Text>
            </a>
            <Text>
              #{item.number}, {findDate(item.created_at)} days, by {item.user.login}{' '}
            </Text>
            <img src={IssuesWarning} alt="warning" style={{ marginBottom: '9px' }} />
          </IssuesDetail>
        ))}
      </Issues>
      <BottomDiv>
        <Readme>
          <TextB>README.md</TextB>
          <Markdown>{content}</Markdown>
        </Readme>
        <Readme>
          {issues.map((item, i) => (
            <IssuesFull key={i}>
              <IssuesDetailLeft>
                <img
                  src={IssuesWarning}
                  alt="warning"
                  style={{ marginBottom: '9px', marginRight: '10px' }}
                />
              </IssuesDetailLeft>
              <IssuesDetailRigth>
                <a href={item.html_url}>
                  <Text>{item.title}</Text>
                </a>
                <Text>
                  #{item.number}, {findDate(item.created_at)} days, by {item.user.login}{' '}
                </Text>
              </IssuesDetailRigth>
            </IssuesFull>
          ))}
        </Readme>
      </BottomDiv>
    </Container>
  )
}

export default ProjectDetail
