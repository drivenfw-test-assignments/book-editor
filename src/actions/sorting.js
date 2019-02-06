import * as LocalStorage from 'helpers/localStorage'

export const TOGGLE_SORTING_DIRECTION = 'TOGGLE_SORTING_DIRECTION'
export const SET_SORTING_FIELD = 'SET_SORTING_FIELD'


const toggleSortingDirection = () => ({
  type: TOGGLE_SORTING_DIRECTION
})

const setSortingField = field => ({
  type: SET_SORTING_FIELD,
  payload: field
})

export const toggleSortDirection = () => (dispatch, getState) => {
  const { sorting: { direction } } = getState()
  const newDirection = direction === 'asc' ? 'desc' : 'asc'

  dispatch(toggleSortingDirection())
  LocalStorage.setSortingDirection(newDirection)
}

export const setSortField = field => dispatch => {
  dispatch(setSortingField(field))
  LocalStorage.setSortingField(field)
}

