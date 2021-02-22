import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #4b7d74;
  border-radius: 30px;
  color: white;
  padding: 1rem;
  margin: 0 0 5rem;
  width: auto;
  height: 12rem;
  border: 2px solid rgba(60, 176, 155, 20%);
`
const Issues = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`

const IssuesFull = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  padding: 20px;
  margin-right: 10px;
`
const IssuesDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40%;
  margin: 5.5px;
  border-radius: 30px;
  border: 2px solid rgba(60, 176, 155, 20%);
  padding: 0 1rem;
`

const IssuesDetailRigth = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
`
const IssuesDetailLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DetailsLeft = styled.div`
  text-align: center;
`
const DetailsMiddle = styled.div`
  margin: 0 15px;
`
const DetailsRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 125px;
`
const DetailsRightRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-height: 12px;
  margin-bottom: 6px;
`
const DetailsRightText = styled.p`
  display: flex;
  margin: 0 0 0 6px;
  color: #4b7d74;
`
const Language = styled.h6`
  color: #4b7d74;
`

const BottomDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`
const Readme = styled.div`
  padding: 1rem;
  width: 40%;
  min-width: 500px;
  border: 2px solid rgba(60, 176, 155, 20%);
  border-radius: 30px;
  font-size: 12px;
  margin: 0.2rem;
  height: 100%;
`
const TextB = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #9f9f9f;
`

const Text = styled.h4`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: medium !important;
  color: #000;
`

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0 8px 0;
`

const GithubDirecting = styled.a`
  color: #4b7d74;
  font-size: 2rem;
  &:hover {
    color: #4b7d74;
  }
`

export {
  Container,
  Issues,
  Details,
  IssuesFull,
  IssuesDetail,
  IssuesDetailRigth,
  IssuesDetailLeft,
  DetailsRight,
  DetailsRightRow,
  DetailsRightText,
  DetailsMiddle,
  DetailsLeft,
  BottomDiv,
  Language,
  Readme,
  Text,
  TextB,
  Label,
  GithubDirecting
}
