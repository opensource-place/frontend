import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 8px;
  padding: 0.5rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  margin-right: ${(props) => props.margin};
  margin: ${(props) => props.marging};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.radius};
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.bcolor};

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
      : props.deneme
      ? '#1F8874'
      : props.landing
      ? '#63D0AB'
      : props.primary
      ? '#1F8874'
      : '#00000'};
  padding: ${(props) => props.padding || '1rem'};
`
export default StyledButton
