import { SET_MESSAGE } from 'actions/message'


const message = (state = '', action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload

    default:
      return state
  }
}

export default message

