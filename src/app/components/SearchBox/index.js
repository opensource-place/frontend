import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  margin: 5px 0px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
`
const SearchBox = ({ placeholder, handleChange }) => (
  <Input
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
)
export default SearchBox
