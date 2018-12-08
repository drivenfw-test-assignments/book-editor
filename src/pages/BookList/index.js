import React from 'react'
import { connect } from 'react-redux'
import Book from 'components/Book'
import './styles.css'


const BookList = ({ bookList }) =>
  <div className="book-list">
    {bookList.map(book => 
      <Book
        key={book.id}
        book={book}
      />
    )}
  </div>

export default connect(state => ({ bookList: state }))(BookList)

