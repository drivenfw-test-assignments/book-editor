export const DELETE_BOOK = 'DELETE_BOOK'


export const deleteBook = id => ({
  type: DELETE_BOOK,
  payload: id
})

