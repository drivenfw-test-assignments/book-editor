import React from 'react'


const BookField = ({ content, title }) =>
  content
    ? <div className="book__field">
        <div className="book__fieldtitle">
          {title}:
        </div>
        <div className="book__fieldcontent">
          {content}
        </div>
      </div>
    : null

export default BookField

