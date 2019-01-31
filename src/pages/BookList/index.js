import React from 'react'
import { connect } from 'react-redux'
import Book from 'components/Book'
import { del } from 'actions/books'
import getSortedBooks from 'selectors'
import './styles.css'


const mapStateToProps = state => ({
  bookList: getSortedBooks(state)
})

const mapDispatchToProps = dispatch => ({
  onBookDelete: id => { 
    if (confirm('Are you sure?')) {
      dispatch(del(id))
    }
  }
})

const BookList = ({ bookList, onBookDelete }) =>
  <div className="book-list">
    {bookList.map(book => 
      <Book
        key={book.id}
        book={book}
        onDelete={() => onBookDelete(book.id)}
      />
    )}
  </div>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

