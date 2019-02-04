import * as LocalStorage from 'helpers/localStorage'

export const TOGGLE_SORTING_DIRECTION = 'TOGGLE_SORTING_DIRECTION'
export const SET_SORTING_FIELD = 'SET_SORTING_FIELD'


const toggleSortingDirection = () => ({
  type: TOGGLE_SORTING_DIRECTION
})

export const setSortingField = field => ({
  type: SET_SORTING_FIELD,
  payload: field
})

export const toggleSortDirection = () => (dispatch, getState) => {
  const { sorting: { direction } } = getState()

  dispatch(toggleSortingDirection())
  LocalStorage.setSortingDirection(direction)
}

