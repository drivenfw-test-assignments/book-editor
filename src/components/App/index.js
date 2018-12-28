import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Header from 'components/Header'
import EditBook from 'pages/EditBook'
import BookList from 'pages/BookList'
import BookNew from 'pages/BookNew'
import Message from 'components/Message'
import './styles.css'


const App = () =>
  <Router>
    <div className="app">
      <Header />
      <Message />
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route path="/books/new" component={BookNew} />
        <Route path="/books/:id/edit" component={EditBook} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  </Router>

export default App

