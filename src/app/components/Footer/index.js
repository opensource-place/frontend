import React from 'react'
import { Container, Link, Text } from './style'

const year = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div>
      <Link as="a">Documents</Link>
      <Link as="a">Contacts</Link>
    </div>
    <Text>© Copyright {year} - Open Source Place</Text>
  </Container>
)

export default Footer
