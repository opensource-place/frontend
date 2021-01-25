import styled from 'styled-components'

const StyledButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${(props) => props.border};
    color: ${(props) => props.color};
    border-radius: ${(props) => props.radius};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.fontSize};
    background-color: ${(props) => (props.dublicate
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
                            : '#00000')};
    padding: 1rem;
    background-color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
`

export default StyledButton
