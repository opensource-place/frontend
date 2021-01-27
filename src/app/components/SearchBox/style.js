import styled from 'styled-components'

/**
 * const Input = styled.input`
  margin: 5px 0px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
`
 *type='search'
      placeholder={placeholder}
      onChange={handleChange}
 */
export const Container = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  border-radius: 15px;

`
