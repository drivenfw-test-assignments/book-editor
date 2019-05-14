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
import { ROOT_PATH } from 'def'
import './styles.css'


const App = () =>
  <Router>
    <div className="app">
      <Header />
      <Message />
      <Switch>
        <Route exact path={ROOT_PATH} component={BookList} />
        <Route path="/books/new" component={NewBook} />
        <Route path="/books/:id/edit" component={EditBook} />
        <Route render={() => <Redirect to={ROOT_PATH} />} />
      </Switch>
    </div>
  </Router>

export default App

