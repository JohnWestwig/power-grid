import { createSelector } from 'reselect'

export const byId = (itemIds, itemsById) =>
  createSelector(itemIds, itemsById, (itemIds, itemsById) =>
    itemIds.map(id => itemsById[id])
  )
