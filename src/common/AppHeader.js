import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Menu, Layout, Icon } from "antd";
import "./AppHeader.css";
import strings from "../res/Strings";
import "../res/CssStyles.css";

const { Header, Footer, Sider, Content } = Layout;

export default class AppHeader extends Component {
  render() {
    let menuItems;
    menuItems = [
      <Menu.Item key="/login">
        <Link to="/login" className="ptxt">{strings.login}</Link>
      </Menu.Item>,
      <Menu.Item key="/signup" className="ptxt">
        <Link to="/signup">{strings.signup}</Link>
      </Menu.Item>
    ];
    return (
      <Header className="app-header">
        <div className="container">


        <Menu
            className=" logout_link"
            mode="horizontal"
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="/login">
              <Link to="/login" className="ptxt">
                {strings.logout}
              </Link>
            </Menu.Item>
          </Menu>

          <div className="app-title">
            <Link to="/">
              <Icon type="home" style={{ fontSize: "25px" ,padding:15}} />
              App Title
            </Link>
          </div>

          <Menu
            className="app-menu"
            mode="horizontal"
            style={{ lineHeight: "64px" }}
          >
            {menuItems}
          </Menu>
        </div>
      </Header>
    );
  }
}
