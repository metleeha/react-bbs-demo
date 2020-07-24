import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import LogInPage from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage';
import BoardPage from '../pages/BoardPage';

class App extends Component {
  render() {
    return (
        <>
          <Route exact path="/" component={ HomePage } />
          <Route path="/users" component={ AdminPage} />
          <Route path="/login" component={ LogInPage } />
          <Route path="/register" component={ RegisterPage } />
          <Route path="/board" component={ BoardPage } />
        </>
    )
  }
}

export default App;
