import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookForm from 'components/BookForm'
import BackButton from 'components/BackButton'
import scrollTo from 'hoc/scrollTo'
import { update } from 'actions/books'
import { setMessage } from 'actions/message'
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
  onFormSubmit: values => dispatch(update(id, values)),
  setMessage: msg => dispatch(setMessage(msg))
})

class EditBook extends Component {
  render() {
    const { initialValues, onFormSubmit } = this.props

    return (
      <div className="edit-book">
        <BackButton />
        <BookForm
          initialValues={initialValues}
          onSubmit={onFormSubmit}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(scrollTo(EditBook, 0, 0))

