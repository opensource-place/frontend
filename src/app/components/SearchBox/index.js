import React from 'react'
import { Container } from './style'

const SearchBox = ({ placeholder, handleChange }) => (
  <Container
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />

)
export default SearchBox
