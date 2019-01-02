import React from 'react'
import PropTypes from 'prop-types'


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

BookField.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  title: PropTypes.string
}

export default BookField

