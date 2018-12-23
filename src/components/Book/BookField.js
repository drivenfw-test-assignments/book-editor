import React from 'react'


const BookField = ({ content, title }) =>
  content
    ? <div className="book__field">
        <div className="book__field-title">
          {title}:
        </div>
        <div className="book__field-content">
          {content}
        </div>
      </div>
    : null

export default BookField

