import React, { Component } from 'react'
import classNames from 'classnames'


class FileInput extends Component {
  imageInput = React.createRef()

  onImageChange = e => {
    const file = this.imageInput.current.files[0]

    if (file) {
      const reader = new FileReader()
      
      reader.onload = e => {
        const imageUrl = e.target.result

        this.props.onChange(imageUrl)
      }

      reader.readAsDataURL(file)
    }
  }

  onChooseFileClick = e => {
    e.preventDefault()
    this.imageInput.current.click()
  }

  onDeleteFileClick = e => {
    e.preventDefault()
    this.props.onChange('')
  }

  render () {
    const { className, imageUrl } = this.props

    return (
      <div className={classNames('file-input', className)}>
        <button onClick={this.onChooseFileClick}>
          Choose file
        </button>
        {imageUrl && 
          <button onClick={this.onDeleteFileClick}>
            Delete
          </button>
        }
        <input
          ref={this.imageInput}
          type="file" 
          onChange={this.onImageChange}
        />
      </div>
    )
  }
}

export default FileInput

