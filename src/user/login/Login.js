import React, { Component } from "react";
import { login } from "../../util/APIUtils";
import "./Login.css";
import { Link } from "react-router-dom";
import { ACCESS_TOKEN } from "../../constants";

import "antd/dist/antd.css";
import { Form, Input, Button, Icon, notification, Card, Layout } from "antd";
import { black } from "ansi-colors";

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

    // this.props.history.push("/ChatApp");
    this.props.history.replace("/ChatApp");
  }

  render() {
    const AntWrappedLoginForm = Form.create()(LoginForm);
    return (
      <Layout className="app-container" style={{flex:1}}>
        <Content className="app-content" style={{flex:1}}>
            <Card>
              <div className="login-container">
                <center>
                  <h1 className="app-title">Chat App</h1>
                </center>
                <h2 className="page-title">Login</h2>
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

    this.setState({
      disabledBtn: true
    });

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const loginRequest = Object.assign({}, values);

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
              prefix={<Icon type="user" />}
              size="large"
              name="email"
              type="email"
              placeholder="Email"
            />
          )}
        </FormItem>
        <FormItem className="login-item">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" />}
              size="large"
              name="password"
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem className="login-item">
          <Button
            disabled={this.state.disabledBtn}
            type="primary"
            htmlType="submit"
            size="large"
            className="login-form-button"
          >
            Login
          </Button>
          Or <Link to="/signup">register now!</Link>
        </FormItem>
      </Form>
    );
  }
}

export default Login;
