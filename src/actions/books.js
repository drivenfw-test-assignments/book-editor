import * as LocalStorage from 'helpers/localStorage'


export const CREATE_BOOK = 'CREATE_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const EDIT_BOOK = 'EDIT_BOOK'

const createBook = values => ({
  type: CREATE_BOOK,
  payload: values
})

export const create = values => (dispatch, getState) => {
  const { books: { currId } } = getState()
  const book = { id: currId + 1, ...values }

  dispatch(createBook(book))
  LocalStorage.createBook(book)
}

export const deleteBook = id => ({
  type: DELETE_BOOK,
  payload: id
})

export const editBook = (id, values) => ({
  type: EDIT_BOOK,
  payload: { id, values }
})

