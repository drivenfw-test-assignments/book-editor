import { SET_MESSAGE } from 'actions/message'


const initialState = { type: '', text: '' }

const message = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export default message

