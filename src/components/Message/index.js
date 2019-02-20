import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Transition from 'react-transition-group/transition'
import './styles.css'


const Message = ({ message }) =>
  <Transition
    in={!!message}
    timeout={200}
    unmountOnExit
  >
    {state => (
      <div className={classNames('message', state)}>
        {message}
      </div>
    )}
  </Transition>

Message.propTypes = {
  message: PropTypes.string
}

export default connect(({ message }) => ({ message }))(Message)

