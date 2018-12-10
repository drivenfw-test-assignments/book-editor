import { 
  CREATE_BOOK,
  DELETE_BOOK,
  EDIT_BOOK
} from 'actions/books'


/* const initialState = {
  currId: 0,
  data: []
} */

const initialState = {
  currId: 2,
  data: [{
    id: 1,
    title: 'Steve Jobs',
    authors: [{ 
      name: 'Walter',
      surname: 'Isaacson'
    }],
    pages: 656,
    publisher: 'Simon & Schuster (U.S.)',
    yearOfPublication: 2011,
    releaseDate: 'October 24, 2011',
    isbn: '1-4516-4853-7',
    imageUrl: ''
  }, {
    id: 2,
    title: 'Twilight',
    authors: [{ 
      name: 'Stephenie',
      surname: 'Meyer'
    }],
    pages: 498,
    yearOfPublication: 2005,
    releaseDate: 'October 5, 2005'
  }]
}

const books = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      const nextId = state.currId + 1

      return {
        currId: nextId,
        data: [
          ...state.data,
          {
            id: nextId,
            ...action.payload
          }
        ]
      }

    case DELETE_BOOK:
      const bookInd = state.data.findIndex(book => 
        book.id === action.payload
      )

      return bookInd >= 0
        ? {
            ...state,
            data: [
              ...state.data.slice(0, bookInd),
              ...state.data.slice(bookInd + 1)
            ]
          }
        : state

    default:
      return state
  }
}

export default books

