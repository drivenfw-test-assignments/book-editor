import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Header from 'components/Header'
import Message from 'components/Message'
import EditBook from 'pages/EditBook'
import BookList from 'pages/BookList'
import NewBook from 'pages/NewBook'
import { EDIT_BOOK_PATH, NEW_BOOK_PATH, ROOT_PATH } from 'def'
import './styles.css'


const App = () =>
  <Router>
    <div className="app">
      <Header />
      <Message />
      <Switch>
        <Route exact path={ROOT_PATH} component={BookList} />
        <Route path={NEW_BOOK_PATH} component={NewBook} />
        <Route path={EDIT_BOOK_PATH} component={EditBook} />
        <Route render={() => <Redirect to={ROOT_PATH} />} />
      </Switch>
    </div>
  </Router>

export default App

