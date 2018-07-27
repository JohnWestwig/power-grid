import { createSelector } from 'reselect'
import { merge } from 'lodash'
import { byId } from '../selectors'

const squareIds = state => state.grid.squares
const squaresById = state => state.grid.squaresById
const size = state => state.grid.size
const focusedSquare = state => state.grid.focusedSquare

const squaresExpanded = byId(squareIds, squaresById)
const squaresWithFocus = createSelector(
  squaresExpanded,
  focusedSquare,
  (squares, focusedSquare) =>
    squares.map(s => ({
      ...s,
      focused: focusedSquare === s.id,
    }))
)
const squaresWithNumbers = createSelector(
  squaresExpanded,
  size,
  (squares, { numRows, numCols }) =>
    squares.reduce(
      ({ squaresWithNumbers, currentNumber }, square, i) => {
        const hasNumber =
          square.navigable &&
          (Math.floor(i / numCols) === 0 ||
            i % numCols === 0 ||
            !squares[i - 1].navigable ||
            !squares[i - numCols].navigable)
        return {
          currentNumber: currentNumber + (hasNumber ? 1 : 0),
          squaresWithNumbers: [
            ...squaresWithNumbers,
            {
              ...square,
              ...(hasNumber ? { number: currentNumber } : {}),
            },
          ],
        }
      },
      {
        currentNumber: 1,
        squaresWithNumbers: [],
      }
    ).squaresWithNumbers
)

export const squares = createSelector(
  squaresWithNumbers,
  squaresWithFocus,
  merge
)
