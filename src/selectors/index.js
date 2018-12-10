import { createSelector } from 'reselect'
import {
  createCompareNumbers,
  createCompareStrings
} from 'helpers/compare'


const getBooks = state => state.books.data
const getSortingDirection = state => state.sorting.direction
const getSortingField = state => state.sorting.field

const getSortedBooks = createSelector(
  getBooks,
  getSortingDirection,
  getSortingField,
  (books, sortDirection, sortField) => {
    const compareFunc = do {
      if (sortField === 'title') {
        createCompareStrings(sortDirection, sortField)
      } else if (sortField === 'yearOfPublication') {
        createCompareNumbers(sortDirection, sortField)
      }
    }

    return [...books].sort(compareFunc)
  }
)

export default getSortedBooks

