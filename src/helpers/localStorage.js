export function createBook(book) {
  if (window.localStorage) {
    const lsData = localStorage.getItem('BOOK-EDITOR')
    let data

    if (lsData) {
      data = JSON.parse(lsData)
      data.books.currId = book.id
      data.books.data.push(book)
    } else {
      data = {
        books: {
          currId: book.id,
          data: [book]
        },
        sorting: {
          direction: 'asc',
          field: 'title'
        }
      }
    }

    localStorage.setItem('BOOK-EDITOR', JSON.stringify(data))
  }
}

export function editBook(id, book) {
  if (window.localStorage) {
    const lsData = localStorage.getItem('BOOK-EDITOR')

    if (lsData) {
      const data = JSON.parse(lsData)
      const ind = data.books.data.findIndex(b => b.id === +id)

      if (ind >= 0) {
        data.books.data[ind] = { ...data.books.data[ind], ...book }
        localStorage.setItem('BOOK-EDITOR', JSON.stringify(data))
      }
    } else {
      // ERROR!
    }
  }
}

export function deleteBook(id) {
  if (window.localStorage) {
    const lsData = localStorage.getItem('BOOK-EDITOR')

    if (lsData) {
      const data = JSON.parse(lsData)
      const ind = data.books.data.findIndex(b => b.id === +id)

      if (ind >= 0) {
        data.books.data.splice(ind, 1)
        localStorage.setItem('BOOK-EDITOR', JSON.stringify(data))
      }
    } else {
      // ERROR!
    }
  }
}

export function setSortingDirection(direction) {
  if (window.localStorage) {
    const lsData = localStorage.getItem('BOOK-EDITOR')
    let data
   
    if (lsData) {
      data = JSON.parse(lsData)
      data.sorting = {
        ...data.sorting,
        direction
      }
    } else {
      data = {
        books: [],
        sorting: {
          direction,
          field: 'title'
        }
      }
    }

    localStorage.setItem('BOOK-EDITOR', JSON.stringify(data))
  }
}

export function setSortingField(field) {
  if (window.localStorage) {
    const lsData = localStorage.getItem('BOOK-EDITOR')
    let data
   
    if (lsData) {
      data = JSON.parse(lsData)
      data.sorting = {
        ...data.sorting,
        field 
      }
    } else {
      data = {
        books: [],
        sorting: {
          direction: 'asc',
          field
        }
      }
    }

    localStorage.setItem('BOOK-EDITOR', JSON.stringify(data))
  }
}

export function loadData() {
  if (window.localStorage) {
    const lsData = localStorage.getItem('BOOK-EDITOR')

    if (lsData) {
      return JSON.parse(lsData)
    }
  }
}

