import { UPDATE_SQUARE, FOCUS_SQUARE, FOCUS_NEIGHBOR } from './actions'
import { DIRECTIONS } from '../../constants'
import { times } from 'lodash'

const size = 15
const squares = times(size * size, n => n)
const squaresById = squares.reduce(
  (o, n) => ({
    ...o,
    [n]: { id: n, navigable: true },
  }),
  {}
)

const defaultState = {
  id: 0,
  squaresById: squaresById,
  squares: squares,
  size: {
    numRows: size,
    numCols: size,
  },
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_SQUARE: {
      const { id, payload: square } = action
      return {
        ...state,
        squaresById: {
          ...state.squaresById,
          [id]: {
            ...state.squaresById[id],
            ...square,
          },
        },
      }
    }
    case FOCUS_SQUARE: {
      const { id } = action
      return {
        ...state,
        focusedSquare: id,
      }
    }
    case FOCUS_NEIGHBOR: {
      const { id, direction } = action
      const focusedSquareIndex = squares.findIndex(s => s.id === id)
      return {
        ...state,
        focusedSquare:
          squares[neighborFromIndex(direction, focusedSquareIndex, state.size)],
      }
    }
    default:
      return state
  }
}

/* Returns the index of the specified neighbor.
 * If the neighbor does not exist, returns the current index */
const neighborFromIndex = (direction, index, { numRows, numCols }) => {
  switch (direction) {
    case DIRECTIONS.NORTH:
      return Math.floor(index / numCols) > 0 ? index - numCols : index
    case DIRECTIONS.WEST:
      return index % numCols > 0 ? index + 1 : index
    case DIRECTIONS.SOUTH:
      return Math.floor(index / numCols) < numRows - 1 ? index + numCols : index
    case DIRECTIONS.EAST:
      return index % numCols < numCols - 1 ? index + 1 : index
    default:
      return index
  }
}
