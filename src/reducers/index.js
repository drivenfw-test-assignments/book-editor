const initialState = [{
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer

