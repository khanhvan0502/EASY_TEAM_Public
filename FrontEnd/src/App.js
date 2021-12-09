import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import AdminPrivateRoute from './AdminPrivateRoute';
import PublicRoute from './PublicRoute';
import axios from 'axios';


axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
          <Switch>

            <AdminPrivateRoute path="/admin" name="Admin" />

            <PublicRoute path="/" name="Home" />

            <Route path="/login">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
            </Route>
            <Route path="/register">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
            </Route>



          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;