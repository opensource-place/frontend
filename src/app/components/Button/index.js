import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 8px;
  padding: 0.5rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.radius};
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.fontSize};
  background: ${(props) =>
    props.dublicate
      ? '#FFC107'
      : props.bug
      ? '#B83239'
      : props.issue
      ? '#16B83F'
      : props.wanted
      ? '#109DEB'
      : props.hard
      ? '#00463A'
      : props.easy
      ? '#008622'
      : props.primary
      ? 'linear-gradient(to bottom right, #20B59A, #20A78E)'
      : '#00000'};
  padding: ${props => props.padding || '1rem'};
`
export default StyledButton
