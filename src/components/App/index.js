import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import BookList from 'pages/BookList'
import BookEdit from 'pages/BookEdit'
import './styles.css'


const App = () =>
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route path="/books/:id/edit" component={BookEdit} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  </Router>

export default App

