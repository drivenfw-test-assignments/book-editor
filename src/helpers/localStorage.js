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

