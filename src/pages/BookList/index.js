import React from 'react'
import { connect } from 'react-redux'
import Book from 'components/Book'
import { deleteBook } from 'actions'
import './styles.css'


const mapStateToProps = state => ({
  bookList: state
})

const mapDispatchToProps = dispatch => ({
  onBookDelete: id => dispatch(deleteBook(id))
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

