import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import HomePage from './HomePage';
import AdminPage from './AdminPage';
import SignInPage from './SignInPage';

class App extends Component {
  render() {
    return (
        <>
          <Route exact path="/" component={ HomePage } />
          <Route path="/users" component={ AdminPage} />
          <Route path="/signin" component={ SignInPage } />
        </>
    )
  }
}

export default App;
