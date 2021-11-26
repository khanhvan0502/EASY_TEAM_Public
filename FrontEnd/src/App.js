import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import AdminPrivateRoute from './AdminPrivateRoute';
import Page403 from './components/errors/Page403';
import Page404 from './components/errors/Page404';

import axios from 'axios';
import ListQuiz from './components/frontend/features/ListQuiz';
import QuizText from './components/frontend/features/QuizText';

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
            <Route exact path="/" component={Home} />

            <Route path="/403" component={Page403} />
            <Route path="/404" component={Page404} />

            {/* <Route path="/login" component={Login} />
            <Route path="/register" component={Register} /> */}
            <Route path="/login">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
            </Route>
            <Route path="/register">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
            </Route>

            <Route path="/listquiz" component={ListQuiz} />
            <Route path="/quiztext" component={QuizText} />

            {/* <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} /> */}
            <AdminPrivateRoute path="/admin" name="Admin" />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;