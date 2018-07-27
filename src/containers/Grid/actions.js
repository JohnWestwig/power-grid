import { byId } from '../actions'

export const UPDATE_SQUARE = 'UPDATE_SQUARE'
export const FOCUS_SQUARE = 'FOCUS_SQUARE'
export const FOCUS_NEIGHBOR = 'FOCUS_NEIGHBOR'

export const updateSquare = byId(UPDATE_SQUARE)
export const focusSquare = byId(FOCUS_SQUARE)
export const focusNeighbor = byId(FOCUS_NEIGHBOR)
