import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  setSortField,
  toggleSortDirection
} from 'actions/sorting'
import PageTitle from './PageTitle'
import { ASC, NEW_BOOK_PATH, ROOT_PATH } from 'def'
import './styles.css'


const mapStateToProps = ({ 
  sorting: {
    direction,
    field
  }
}) => ({
  direction,
  field
})

const mapDispatchToProps = dispatch => ({
  onDirectionChange: () => 
    dispatch(toggleSortDirection()),
  onFieldChange: e => 
    dispatch(setSortField(e.target.value))
})

const Header = ({ 
  direction, 
  field, 
  onDirectionChange,
  onFieldChange
}) =>
  <div className="header">
    <div className="header__current-path">
      <Link className="header__home" to={ROOT_PATH}>
        Book Editor
      </Link>
      <Route exact path={ROOT_PATH} render={() =>
        <Link className="header__create-book" to={NEW_BOOK_PATH}>
          <button className="create-book">
            New Book
          </button>
        </Link>
      } />
      <Route path="/books/new" render={() =>
        <PageTitle title="New Book" />
      } />
      <Route path="/books/:id/edit" render={() =>
        <PageTitle title="Edit Book" />
      } />
    </div>
    <Route exact path={ROOT_PATH} render={() =>
      <div className="sort-by">
        <div className="sort-by__label">
          Sort by:
        </div>
        <select
          className="sort-by__field"
          value={field}
          onChange={onFieldChange}
        >
          <option value="title">Title</option>
          <option value="yearOfPublication">Year of publication</option>
        </select>
        <button 
          className="sort-by__direction"
          onClick={onDirectionChange}
        >
          {direction === ASC ? '▲' : '▼'}
        </button>
      </div>
    } />
  </div>

Header.propTypes = {
  direction: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  onDirectionChange: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header))

