import createHistory from "history/createBrowserHistory";
import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../user/login/Login";
import Signup from "../user/signup/Signup";

export default class AppRouter extends Component {
  render() {
    const history = createHistory();
    return (
      
        <Switch>
          <Route
            history={history}
            path="/login"
            render={props => <Login {...props} />}
          ></Route>

          <Route history={history} path="/signup" component={Signup}></Route>

          <Redirect to="/login" />
        </Switch>
    );
  }
}
