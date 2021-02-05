import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 320px) {
  }
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #4b7d74;
  border-radius: 30px;
  color: white;
  padding: 1rem;
  margin: 0 0 79px;
  width: 540px;
  height: 190px;
  border: 2px solid rgba(60, 176, 155, 10%);
`
const Issues = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
`

const IssuesDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 540px;
  margin: 5.5px;
  border-radius: 30px;
  border: 2px solid rgba(60, 176, 155, 10%);
`

const DetailsLeft = styled.div``
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
  margin-top: 24px;
`
const Readme = styled.div`
  padding: 20px;
  max-width: 640px;
  margin-right: 10px;
  border: 2px solid rgba(60, 176, 155, 10%);
  border-radius: 30px;
`

const Text = styled.h4`
  font-size: 12px;
  font-weight: medium !important;
  color: #000;
`

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0 8px 0;
`

export {
  Container,
  Issues,
  Details,
  IssuesDetail,
  DetailsRight,
  DetailsRightRow,
  DetailsRightText,
  DetailsMiddle,
  DetailsLeft,
  BottomDiv,
  Language,
  Readme,
  Text,
  Label
}
