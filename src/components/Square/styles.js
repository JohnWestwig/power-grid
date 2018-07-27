import styled from 'styled-components'

export const StyledSquare = styled.div`
  border: 1px solid black;
  background-color: ${props =>
    props.navigable ? (props.focused ? 'blue' : 'white') : 'black'};
`

export const StyledNumber = styled.div`
  user-select: none;
`
