import React, { Component } from 'react'


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
    return (
      <div className="file-input">
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

