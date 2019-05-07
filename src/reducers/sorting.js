import { ASC, DESC } from 'def'
import {
  SET_SORTING_FIELD,
  TOGGLE_SORTING_DIRECTION
} from 'actions/sorting'


const initialState = {
  direction: ASC,
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
        direction: state.direction === ASC
          ? DESC
          : ASC
      }

    default:
      return state
  }
}

export default sorting

