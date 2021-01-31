/* eslint-disable */
import styled from "styled-components";

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    height: 28rem;
    width: 18rem;
  }

  @media screen and (min-width: 768px) {
    height: 28rem;
    width: 18rem;
  }

  @media screen and (min-width: 320px) {
    height: 29rem;
    width: 18rem;
    top: 1rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: thick solid #4b7d74;
  border-radius: 30px;
  align-items: flex-start;
  margin: 1rem 1rem;
  background: #242526;
`;

const Text = styled.h1`
  font-size: 1rem;
  color: white;
`;
const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  width: 100%;
  padding-bottom: 1rem;
`;

export { Container, Text, TopDiv };
