import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './styles.css'


const Message = ({ message }) =>
  message &&
    <div className="message">
      {message}
    </div>

Message.propTypes = {
  message: PropTypes.string
}

export default connect(({ message }) => ({ message }))(Message)

