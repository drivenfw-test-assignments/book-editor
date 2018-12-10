export const CREATE_BOOK = 'CREATE_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const EDIT_BOOK = 'EDIT_BOOK'


export const createBook = values => ({
  type: CREATE_BOOK,
  payload: values
})

export const deleteBook = id => ({
  type: DELETE_BOOK,
  payload: id
})

export const editBook = (id, values) => ({
  type: EDIT_BOOK,
  payload: { id, values }
})

