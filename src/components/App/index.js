import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Header from 'components/Header'
import BookEdit from 'pages/BookEdit'
import BookList from 'pages/BookList'
import BookNew from 'pages/BookNew'
import './styles.css'


const App = () =>
  <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route path="/books/new" component={BookNew} />
        <Route path="/books/:id/edit" component={BookEdit} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  </Router>

export default App

