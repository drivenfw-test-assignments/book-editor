export const FAILURE = 'FAILURE'
export const SET_MESSAGE = 'SET_MESSAGE'
const SUCCESS = 'SUCCESS'

export const setMessage = (text, type = SUCCESS) => ({
  type: SET_MESSAGE,
  payload: { type, text }
})

