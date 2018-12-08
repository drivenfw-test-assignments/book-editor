import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


const Header = () =>
  <div className="header">
    <Link className="header__home" to="/">BOOK EDITOR</Link>
  </div>

export default Header

