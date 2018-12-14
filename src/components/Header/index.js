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
    <Route path="/books/new" children={({ match }) =>
      !match && 
        <Link className="header__createbook" to="/books/new">
          <button className="createbook">
            New Book
          </button>
        </Link>
    } />
    <Route exact path="/" render={() =>
      <div className="sortby">
        <div className="sortby__label">
          Sort by:
        </div>
        <select
          className="sortby__field"
          value={field}
          onChange={onFieldChange}
        >
          <option value="title">Title</option>
          <option value="yearOfPublication">Year of publication</option>
        </select>
        <button 
          className="sortby__direction"
          onClick={onDirectionChange}
        >
          {direction === 'asc' ? '▲' : '▼'}
        </button>
      </div>
    } />
  </div>

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header))

