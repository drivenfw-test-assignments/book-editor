import { combineReducers } from 'redux'
import books from './books'
import sorting from './sorting'


export default combineReducers({
  books,
  sorting
})

