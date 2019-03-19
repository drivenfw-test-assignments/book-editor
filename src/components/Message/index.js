import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Transition from 'react-transition-group/transition'
import { Route, withRouter } from 'react-router'
import { getClass } from 'helpers/message'
import './styles.css'


const Message = ({ location: { pathname }, message }) =>
  <Transition
    in={!!message}
    timeout={200}
  >
    {state => (
      <div className={classNames('message', state, getClass(pathname))}>
        {message}
      </div>
    )}
  </Transition>

Message.propTypes = {
  message: PropTypes.string
}

export default withRouter(connect(({ message }) => ({ message }))(Message))

