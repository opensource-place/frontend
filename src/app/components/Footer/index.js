import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Text } from './style'

const year = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div>
      <Link as="a" style={{ color: 'rgb(75, 125, 116)', marginRight: '0.5rem' }}>
        Documents
      </Link>
      <Link to="/contact" style={{ color: 'rgb(75, 125, 116)' }}>
        Contacts
      </Link>
    </div>
    <Text>© Copyright {year} - Open Source Place</Text>
  </Container>
)

export default Footer
