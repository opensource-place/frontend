import React from 'react'
import { Container, Link, Img, Text } from './style'
import Logo from '../../assets/logo.png'

const year = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div>
      <Link as="a">Documents</Link>
      <Link as="a">Contacts</Link>
    </div>
    <Img src={Logo} width="10" height="10em" />
    <Text>© Copyright {year} - Open Source Place</Text>
  </Container>
)

export default Footer
