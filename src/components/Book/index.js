import React from 'react'
import { Link } from 'react-router-dom'
import BookField from './BookField'
import './styles.css'


const Book = ({ book }) =>
  <div className="book">
    <div>
      <div className="book__title">
        {book.title}
      </div>
      <div className="book__info">
        <div className="book__infocol">
          <BookField
            title="Authors"
            content={book.authors.map(({ name, surname }) =>
              `${name} ${surname}`   
            )}
          />  
          <BookField
            title="Pages"
            content={book.pages}
          />
          <BookField
            title="Publisher"
            content={book.publisher}
          />
        </div>
        <div className="book__infocol">
          <BookField
            title="Published"
            content={book.yearOfPublication}
          />
          <BookField
            title="Released"
            content={book.releaseDate}
          />
          <BookField
            title="ISBN"
            content={book.isbn}
          />
        </div>
      </div>
      <div className="book__buttons">
        <Link to={`/books/${book.id}/edit`}>
          <button className="book__btn">Edit</button>
        </Link>
        <button className="book__btn">Delete</button>
      </div>
    </div>
    <div className="book__image">
      {book.imageUrl && <image src={book.imageUrl} />}
    </div>
  </div>

export default Book

