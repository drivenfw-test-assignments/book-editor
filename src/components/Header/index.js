import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  setSortingField,
  toggleSortingDirection
} from 'actions/sorting'
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
  </div>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

