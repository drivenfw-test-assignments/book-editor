import React from 'react'
import { connect } from 'react-redux'
import BookForm from 'components/BookForm'


const mapStateToProps = (
  { books: { data } },
  { match: { params: { id } } }
) => {
  const book = data.find(b => b.id === +id)

  return {
    initialValues: book
  }
}

const mapDispatchToProps = dispatch => ({
  onFormSubmit: () => {}
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
)(BookEdit)

