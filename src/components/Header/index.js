import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  setSortingField,
  toggleSortingDirection
} from 'actions/sorting'
import PageTitle from './PageTitle'
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
    dispatch(toggleSortingDirection()),
  onFieldChange: e => 
    dispatch(setSortingField(e.target.value))
})

const Header = ({ 
  direction, 
  field, 
  onDirectionChange,
  onFieldChange
}) =>
  <div className="header">
    <Link className="header__home" to="/">
      Book Editor
    </Link>
    <Route path="/books/new" render={() =>
      <PageTitle title="New Book" />
    } />
    <Route path="/books/:id/edit" render={() =>
      <PageTitle title="Edit Book" />
    } />
    <Route exact path="/" render={() =>
      <React.Fragment> 
        <Link className="header__create-book" to="/books/new">
          <button className="create-book">
            New Book
          </button>
        </Link>
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
            {direction === 'asc' ? '▲' : '▼'}
          </button>
        </div>
      </React.Fragment>
    } />
  </div>

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header))

