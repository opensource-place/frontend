import styled from 'styled-components'

const StyledButton = styled.button`
    border-radius: 8px;
    padding: 0.5rem;
    background-color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
`

export default StyledButton
