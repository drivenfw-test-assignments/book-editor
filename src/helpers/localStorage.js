export function createBook(book) {
  if (window.localStorage) {
    const lsData = localStorage.getItem('BOOK-EDITOR')
    let data

    if (lsData) {
      data = JSON.parse(lsData)
      data.books.push(book)
    } else {
      data = {
        books: [book],
        sorting: {}
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
      const ind = data.books.findIndex(b => b.id === +id)

      if (ind >= 0) {
        data.books[ind] = { ...data.books[ind], ...book }
        localStorage.setItem('BOOK-EDITOR', JSON.stringify(data))
      }
    } else {
      // ERROR!
    }
  }
}

