import React from 'react'
import { connect } from 'react-redux'
import './styles.css'


const Message = ({ message }) =>
  message &&
    <div className="message">
      {message}
    </div>

export default connect(({ message }) => ({ message }))(Message)

