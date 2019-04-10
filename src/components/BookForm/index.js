import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import './styles.css'


const required = value => (value ? undefined : "Required")

class BookForm extends Component {
  state = { imageUrl: '' }

  static getDerivedStateFromProps(props) {
    const { initialValues: { imageUrl } } = props

    return { imageUrl }
  }

  imageInput = React.createRef()

  onSubmit = values => {
    const file = this.imageInput.current.files[0]

    if (file) {
      // TODO: show loader
      const reader = new FileReader()
      
      reader.onload = e => {
        values.imageUrl = e.target.result
        this.props.onSubmit(values) 
      }

      reader.readAsDataURL(file)
    } else {
      this.props.onSubmit(values) 
    }
  }

  render() {
    const { initialValues } = this.props

    return (
      <Form
        initialValues={initialValues}
        mutators={{
          ...arrayMutators
        }}
        onSubmit={this.onSubmit}
        render={({ 
          handleSubmit, 
          form: { mutators: { push, pop }, reset },
          submitting, 
          pristine, 
          values 
        }) => (
          <form 
            className="book-form"
            onSubmit={handleSubmit}
          >
            <div className="form-inputs">
              <div>
                <Field name="title" validate={required}>
                  {({ input, meta }) => (  
                    <div className="form-group">
                      <label className="form-group__label">Title</label>
                      <input 
                        className="form-group__input"
                        {...input} 
                        type="text" 
                        placeholder="Title"
                      />
                      <span className="form-group__error">
                        {meta.error && meta.touched && meta.error}
                      </span>
                    </div>
                  )}
                </Field>
                <FieldArray name="authors">
                  {({ fields }) => 
                    fields.map((name, index) => (
                      <div key={name}>
                        <Field 
                          name={`${name}.name`}
                          validate={required}
                        >
                          {({ input, meta }) => (  
                            <div className="form-group">
                              <label className="form-group__label">Author</label>
                              <input 
                                className="form-group__input"
                                {...input} 
                                type="text" 
                                placeholder="Name"
                              />
                              <span className="form-group__error">
                                {meta.error && meta.touched && meta.error}
                              </span>
                            </div>
                          )}
                        </Field>
                        <Field
                          name={`${name}.surname`}
                          validate={required}
                        >
                          {({ input, meta }) => (  
                            <div className="form-group">
                              <label className="form-group__label">
                                {index > 0 && 
                                  <span
                                    className="form-group__delete-author"
                                    onClick={() => fields.remove(index)}
                                  >
                                    ❌
                                  </span>
                                }
                              </label>
                              <input 
                                className="form-group__input"
                                {...input} 
                                type="text" 
                                placeholder="Surname"
                              />
                              <span className="form-group__error">
                                {meta.error && meta.touched && meta.error}
                              </span>
                            </div>
                          )}
                        </Field>
                      </div>
                    ))
                  }
                </FieldArray>
                <div className="form-group">
                  <button 
                    className="book-form__add-author-btn"
                    onClick={e => {
                      e.preventDefault()
                      push('authors', undefined)
                    }}
                  >
                    Add Author
                  </button>
                </div>
                <Field name="pages" validate={required}>
                  {({ input, meta }) => (  
                    <div className="form-group">
                      <label className="form-group__label">Pages</label>
                      <input 
                        className="form-group__input"
                        {...input} 
                        type="number" 
                        placeholder="Pages"
                        min="0"
                        max="10000"
                      />
                      <span className="form-group__error">
                        {meta.error && meta.touched && meta.error}
                      </span>
                    </div>
                  )}
                </Field>
                <Field name="publisher">
                  {({ input, meta }) => (  
                    <div className="form-group">
                      <label className="form-group__label">Publisher</label>
                      <input 
                        className="form-group__input"
                        {...input} 
                        type="text" 
                        placeholder="Publisher"
                        min="0"
                        max="10000"
                      />
                      <span className="form-group__error">
                        {meta.error && meta.touched && meta.error}
                      </span>
                    </div>
                  )}
                </Field>
                <Field name="yearOfPublication">
                  {({ input, meta }) => (  
                    <div className="form-group">
                      <label className="form-group__label">Year of publication</label>
                      <input 
                        className="form-group__input"
                        {...input} 
                        type="number" 
                        placeholder="Year of publication"
                        min="1800"
                        max={(new Date()).getFullYear()}
                      />
                      <span className="form-group__error">
                        {meta.error && meta.touched && meta.error}
                      </span>
                    </div>
                  )}
                </Field>
                <Field name="releaseDate">
                  {({ input, meta }) => (  
                    <div className="form-group">
                      <label className="form-group__label">Release date</label>
                      <input 
                        className="form-group__input"
                        {...input} 
                        type="date" 
                        placeholder="Release date"
                      />
                      <span className="form-group__error">
                        {meta.error && meta.touched && meta.error}
                      </span>
                    </div>
                  )}
                </Field>
                <Field name="isbn">
                  {({ input, meta }) => (  
                    <div className="form-group">
                      <label className="form-group__label">ISBN</label>
                      <input 
                        className="form-group__input"
                        {...input} 
                        type="text" 
                        placeholder="ISBN"
                      />
                      <span className="form-group__error">
                        {meta.error && meta.touched && meta.error}
                      </span>
                    </div>
                  )}
                </Field>
                <div className="form-group">
                  <label className="form-group__label">Image</label>
                  <input
                    ref={this.imageInput}
                    className="form-group__input"
                    type="file" 
                  />
                </div>
              </div>
              <div className="form-group">
                <img src={this.state.imageUrl} />
              </div>
            </div>
            <div className="form-buttons">
              <button 
                className="form-buttons__btn"
                type="submit" 
                disabled={submitting}
              >
                Submit
              </button>
              <button
                className="form-buttons__btn"
                type="button"
                onClick={reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    )
  }
}

BookForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default BookForm

