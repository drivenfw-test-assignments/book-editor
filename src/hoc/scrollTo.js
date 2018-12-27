import React, { Component } from 'react'


export default function scrollTo(WrappedComponent, x, y) {
  return class ScrollTo extends Component {
    componentDidMount() {
      window.scroll(x, y)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

