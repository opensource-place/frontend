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
  Text
} from './style'
import { useParams } from 'react-router-dom'
import { Progressbar } from '../index'
import axios from 'axios'
import { Fork, View, Star } from '../../assets'
import Markdown from 'markdown-to-jsx'

function ProjectDetail () {
  const { projectname, reponame } = useParams()
  const [issues, setIssues] = useState([])
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

    const res = await axios.get(`http://localhost:8080/graphql?query=${query}`)
    setIssues(res.data.data.issues)
  }

  const getMarkdown = async () => {
    const res = await axios.get(
      `https://raw.githubusercontent.com/${projectname}/${reponame}/master/README.md`
    )
    setContent(await res.data)
  }
  console.log(content)
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
              <Text>{item.title}</Text>
            </a>
            <img
              height="50px"
              width="50px"
              src={item.user.avatar_url}
              alt="The issue creator"
              style={{
                borderRadius: '100%'
              }}
            />
            <Text>opened {findDate(item.created_at)} days ago</Text>
          </IssuesDetail>
        ))}
      </Issues>
      <BottomDiv>
        <Readme>
          <Markdown>{content}</Markdown>
        </Readme>
        <Readme>
          <h1>Where does it come from?</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 ofde Finibus Bonorum et Malorum (The Extremes of
            Good and Evil) by Cicero, written in 45 BC. This book is a treatise
            on the theory of ethics, very popular during the Renaissance. The
            first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from
            a line in section 1.10.32. The standard chunk of Lorem Ipsum used
            since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are
            also reproduced in their exact original form, accompanied by English
            versions from the 1914 translation by H. Rackham.
          </p>
        </Readme>
      </BottomDiv>
    </Container>
  )
}

export default ProjectDetail
