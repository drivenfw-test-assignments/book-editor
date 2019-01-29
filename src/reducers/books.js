import { 
  CREATE_BOOK,
  DELETE_BOOK,
  EDIT_BOOK
} from 'actions/books'


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
    releaseDate: '2011-10-24',
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
    releaseDate: '2005-10-05'
  }]
}

const books = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      const nextId = action.payload.id

      return {
        currId: nextId,
        data: [
          ...state.data,
          { ...action.payload }
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

    case EDIT_BOOK:
      const { id, values } = action.payload

      return {
        ...state,
        data: state.data.map(book => (
          book.id === +id
            ? {
                ...book,
                ...values 
              }
            : book
        ))
      }

    default:
      return state
  }
}

export default books

