import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Transition from 'react-transition-group/transition'
import { Route, withRouter } from 'react-router'
import { getClass } from 'helpers/message'
import { setMessage } from 'actions/message'
import './styles.css'


const mapStateToProps = ({ message }) => ({ message })

const mapDispatchToProps = dispatch => ({
  setMessage: () => dispatch(setMessage(''))
})

class Message extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.message && this.props.message) {
      setTimeout(() => this.props.setMessage(''), 2500)
    }
  }

  render() {
    const { location: { pathname }, message } = this.props
      
    return ( 
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
    )
  }
}

Message.propTypes = {
  message: PropTypes.string
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Message))

