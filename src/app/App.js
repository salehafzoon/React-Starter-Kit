import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import { Layout, notification } from "antd";

import { ACCESS_TOKEN } from "../constants";

import AppRouter from "./AppRouter";

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    };
    notification.config({
      placement: "topRight",
      top: 70,
      duration: 3
    });
  }

  render() {
    return <AppRouter />;
  }
}

export default withRouter(App);
