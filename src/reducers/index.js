import { combineReducers } from 'redux'
import books from './books'
import message from './message'
import sorting from './sorting'


export default combineReducers({
  books,
  message,
  sorting
})

