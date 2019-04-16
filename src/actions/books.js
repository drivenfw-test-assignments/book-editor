import * as LocalStorage from 'helpers/localStorage'
import { FAILURE, setMessage } from 'actions/message'


export const CREATE_BOOK = 'CREATE_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'

const createBook = values => ({
  type: CREATE_BOOK,
  payload: values
})

const updateBook = (id, values) => ({
  type: UPDATE_BOOK,
  payload: { id, values }
})

const deleteBook = id => ({
  type: DELETE_BOOK,
  payload: id
})

export const create = values => (dispatch, getState) => {
  const { books: { currId } } = getState()
  const book = { id: currId + 1, ...values }

  if (LocalStorage.createBook(book)) {
    dispatch(createBook(book))
    dispatch(setMessage('Book successfully created!'))
  } else {
    dispatch(setMessage('Error creating book', FAILURE))
  }
}

export const update = (id, values) => dispatch => {
  dispatch(updateBook(id, values))
  LocalStorage.updateBook(id, values)
  dispatch(setMessage('Book successfully updated!'))
}

export const del = id => dispatch => {
  dispatch(deleteBook(id))
  LocalStorage.deleteBook(id)
  dispatch(setMessage(`Book (ID: ${id}) was deleted`))
}

