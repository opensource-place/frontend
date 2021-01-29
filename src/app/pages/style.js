import styled from 'styled-components'

export const Container = styled.div`
justify-content: space-between;
min-height: 100vh;
background-color: 'red';
`
export const HeaderUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    height: 50%;
  }

  @media screen and (min-width: 768px) {
    height: 50%;
  }

  @media screen and (min-width: 320px) {
    height: 50%;
  }
  background: url('https://image.freepik.com/free-vector/mars-landscape-alien-planet-martian-background_107791-1781.jpg') no-repeat center/cover;
  text-align: center;
`

export const Invite = styled.div`
  margin-top:  1em;
`
export const Description = styled.div`
  width: 612px;
  height: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;

`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  flex-direction: row;
  @media screen and (min-width: 1024px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 320px) {
    width: 100%;
  }
`

export const DarkenBackground = styled.div`
  width: 100%;
  height: 100%;
`

export const AddSomeMargin = styled.div`
  margin: 5em;
  padding: 25px;
  background: rgba(255, 255, 255, .15);
  border-radius: 5px;
`
