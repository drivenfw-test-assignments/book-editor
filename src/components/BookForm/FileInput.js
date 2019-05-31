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

        this.props.onFileInputChange(imageUrl)
      }

      reader.readAsDataURL(file)
    }
  }

  render () {
    const { className, imageUrl } = this.props

    return (
      <div className={classNames('file-input', className)}>
        <button>Choose file</button>
        <button>Delete</button>
        {imageUrl && <button>Delete</button>}
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

