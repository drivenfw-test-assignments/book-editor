export const SET_MESSAGE = 'SET_MESSAGE'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'


export const setMessage = (text, type = SUCCESS) => ({
  type: SET_MESSAGE,
  payload: { type, text }
})

