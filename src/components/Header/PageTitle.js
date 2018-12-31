import React from 'react'
import PropTypes from 'prop-types'


const PageTitle = ({ title }) =>
  <div className="header__page-title">
    / {title}
  </div>

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageTitle

