import * as LocalStorage from 'helpers/localStorage'


export const CREATE_BOOK = 'CREATE_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const EDIT_BOOK = 'EDIT_BOOK'

const createBook = values => ({
  type: CREATE_BOOK,
  payload: values
})

const editBook = (id, values) => ({
  type: EDIT_BOOK,
  payload: { id, values }
})

const deleteBook = id => ({
  type: DELETE_BOOK,
  payload: id
})

export const create = values => (dispatch, getState) => {
  const { books: { currId } } = getState()
  const book = { id: currId + 1, ...values }

  dispatch(createBook(book))
  LocalStorage.createBook(book)
}

export const edit = (id, values) => dispatch => {
  dispatch(editBook(id, values))
  LocalStorage.editBook(id, values)
}

export const del = id => dispatch => {
  dispatch(deleteBook(id))
  LocalStorage.deleteBook(id)
}

