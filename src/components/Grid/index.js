import React from 'react'
import StyledGrid from './styles'
import Square from '../Square'
import GridType from '../../types/Grid'
import { DIRECTIONS } from '../../constants'

export default class Grid extends React.PureComponent {
  static propTypes = GridType

  render() {
    const {
      size,
      squares,
      focusedSquare,
      updateSquare,
      focusSquare,
      focusNeighbor,
    } = this.props

    return (
      <StyledGrid size={size} onKeyPress={() => focusNeighbor(focusedSquare)}>
        {squares.map((s, i) => (
          <Square
            key={i}
            {...s}
            update={square => updateSquare(s.id, square)}
            focus={() => focusSquare(s.id)}
          />
        ))}
      </StyledGrid>
    )
  }
}
