import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookForm from 'components/BookForm'
import scrollTo from 'hoc/scrollTo'
import { createBook } from 'actions/books'
import { setMessage } from 'actions/message'
import './styles.css'


const initialValues = {
  title: '',
  authors: [{
    name: '',
    surname: '' 
  }],
  pages: '',
  publisher: '',
  yearOfPublication: '',
  releaseDate: '',
  isbn: ''
}

const mapStateToProps = ({ books: { currId } }) => ({
  currId
})

const mapDispatchToProps = dispatch => ({
  onFormSubmit: values => dispatch(createBook(values)),
  setMessage: msg => dispatch(setMessage(msg))
})

class NewBook extends Component {
  componentDidUpdate(prevProps) {
    const { currId, setMessage } = this.props

    if (currId !== prevProps.currId) {
      setMessage('Book successfully created!')
      setTimeout(() => setMessage(''), 1000)

      this.props.history.push(`/books/${currId}/edit`)
    }
  }

  render() {
    const { currId, onFormSubmit } = this.props

    return (
      <div className="new-book">
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
)(scrollTo(NewBook, 0, 0))

