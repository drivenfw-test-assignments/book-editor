import React from 'react'
import { connect } from 'react-redux'
import BookForm from 'components/BookForm'
import scrollTo from 'hoc/scrollTo'
import { editBook } from 'actions/books'
import './styles.css'


const mapStateToProps = (
  { books: { data } },
  { match: { params: { id } } }
) => {
  const book = data.find(b => b.id === +id)

  return {
    initialValues: book
  }
}

const mapDispatchToProps = (
  dispatch,
  { match: { params: { id } } }
) => ({
  onFormSubmit: values => dispatch(editBook(id, values))
})

const BookEdit = ({ initialValues, onFormSubmit }) =>
  <div className="book-edit">
    <BookForm
      initialValues={initialValues}
      onSubmit={onFormSubmit}
    />
  </div>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(scrollTo(BookEdit, 0, 0))

