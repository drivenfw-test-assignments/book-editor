export const SET_SORTING_FIELD = 'SET_SORTING_FIELD'
export const TOGGLE_SORTING_DIRECTION = 'TOGGLE_SORTING_DIRECTION'


export const setSortingField = field => ({
  type: SET_SORTING_FIELD,
  payload: field
})

export const toggleSortingDirection = () => ({
  type: TOGGLE_SORTING_DIRECTION
})

