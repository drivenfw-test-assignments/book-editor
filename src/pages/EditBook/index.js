import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookForm from 'components/BookForm'
import scrollTo from 'hoc/scrollTo'
import { edit } from 'actions/books'
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
  onFormSubmit: values => dispatch(edit(id, values)),
  setMessage: msg => dispatch(setMessage(msg))
})

class EditBook extends Component {
  componentDidUpdate() {
    window.scroll(0, 0)
  }

  render() {
    const { initialValues, onFormSubmit } = this.props

    return (
      <div className="edit-book">
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

