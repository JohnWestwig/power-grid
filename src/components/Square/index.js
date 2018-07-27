import React from 'react'
import { StyledSquare, StyledNumber } from './styles'

export default function({
  contents,
  navigable,
  number,
  focused,
  update,
  focus,
}) {
  return (
    <StyledSquare
      navigable={navigable}
      focused={focused}
      onClick={focus}
      onDoubleClick={() =>
        update({
          navigable: !navigable,
        })
      }
    >
      <StyledNumber>{number}</StyledNumber>
    </StyledSquare>
  )
}
