import React from 'react'
import { Link } from 'react-router-dom'
import { ROOT_PATH } from 'def'
import './styles.css'


const BackButton = () =>  
  <div className="back-button">
    <Link to={ROOT_PATH}>
      ⬅
    </Link>
  </div>

export default BackButton

