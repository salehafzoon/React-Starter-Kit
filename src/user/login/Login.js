import React, { Component } from "react";
import { login } from "../../util/APIUtils";
import "./Login.css";
import "../../res/CssStyles.css";

import { Link } from "react-router-dom";
import { ACCESS_TOKEN } from "../../constants";

import "antd/dist/antd.css";
import { Form, Input, Button, Icon, notification, Card, Layout } from "antd";
import strings from "../../res/Strings";
import { red } from "ansi-colors";

const { Content } = Layout;
const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    notification.success({
      message: "Chat App",
      description: "You're successfully logged in."
    });

    this.props.history.replace("/Main");
  }

  render() {
    const AntWrappedLoginForm = Form.create()(LoginForm);
    return (
      <Layout className="app-container">
        <Content className="app-content">
          <Card>
            <div className="login-container">
              <center>
                <h1 className="primary_big">App Title</h1>
              </center>
              <h2
                className="page-title"
                style={{ margin: 80, textAlign: "center" }}
              >
                {strings.login_to_site}
              </h2>
              <div className="login-content">
                <AntWrappedLoginForm onLogin={this.handleLogin} />
              </div>
            </div>
          </Card>
        </Content>
      </Layout>
    );
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledBtn: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const loginRequest = Object.assign({}, values);

        this.setState({
          disabledBtn: true
        });

        login(loginRequest)
          .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.data.access_token);

            this.setState({
              disabledBtn: false
            });
            this.props.onLogin();
          })
          .catch(error => {
            notification.error({
              message: "Chat App",
              description: error.message
            });
            console.log(error.message);
            this.setState({
              disabledBtn: false
            });
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem className="login-item">
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your Email!" }]
          })(
            <Input
              style={{ justifyContent: "center", textAlign: "center" }}
              suffix={<Icon type="user" style={{ fontSize: "30px" }} />}
              size="large"
              name="email"
              type="email"
              placeholder={strings.email}
            />
          )}
        </FormItem>
        <FormItem className="login-item">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              style={{ justifyContent: "center", textAlign: "center" }}
              suffix={<Icon type="lock" style={{ fontSize: "30px" }} />}
              size="large"
              name="password"
              type="password"
              placeholder={strings.password}
            />
          )}
        </FormItem>
        <FormItem
          className="login-item"
          style={{ fontSize: 18, textAlign: "center" }}
        >
          <Button
            disabled={this.state.disabledBtn}
            type="primary"
            htmlType="submit"
            size="large"
            className="login-form-button primary_btn"
            style={{ marginTop: 20 }}
          >
            {strings.login}
          </Button>
          <div style={{ marginTop: 20 }}>
            {strings.dont_have_account}
            <Link to="/signup" style={{ margin: 10}}>
              {strings.signup}
            </Link>
          </div>
        </FormItem>
      </Form>
    );
  }
}

export default Login;
