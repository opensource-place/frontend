import React from 'react'
import { Container, Link } from './style'
import Logo from '../../assets/logo.png'
import styled from 'styled-components'

const Img = styled.img`
  width: 10em;
  height: 10em;
`
const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: rgb(33, 64, 58);
`
const Footer = () => (
  <Container>
    <div>
      <Link as="a">Documents</Link>
      <Link as="a">Contacts</Link>
    </div>
    <Img src={Logo} width="10" height="10em" />
    <Text>© Copyright 2021 - Open Source Adam</Text>
  </Container>
)

export default Footer
