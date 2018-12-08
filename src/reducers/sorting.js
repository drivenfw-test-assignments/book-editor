import {
  SET_SORTING_FIELD,
  TOGGLE_SORTING_DIRECTION
} from 'actions/sorting'


const initialState = {
  direction: 'asc',
  field: 'title'
}

const sorting = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTING_FIELD:
      return {
        ...state,
        field: action.payload
      }

    case TOGGLE_SORTING_DIRECTION:
      return {
        ...state,
        direction: state.direction === 'asc'
          ? 'desc'
          : 'asc'
      }

    default:
      return state
  }
}

export default sorting

