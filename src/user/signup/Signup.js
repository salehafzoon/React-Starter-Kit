import React, { Component } from "react";
import { signup } from "../../util/APIUtils";
import "./Signup.css";
import "../../res/CssStyles.css";

import { Link } from "react-router-dom";

import { Form, Input, Button, notification, Card, Icon } from "antd";
import strings from "../../res/Strings";
const FormItem = Form.Item;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: ""
      },
      phone: {
        value: ""
      },
      email: {
        value: ""
      },
      password: {
        value: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: {
        value: inputValue
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (
      this.state.name.value == "" ||
      this.state.phone.value == "" ||
      this.state.email.value == "" ||
      this.state.password.value == ""
    )
      notification.error({
        message: "App",
        description: strings.fill_the_form
      });
    else {
      const signupRequest = {
        name: this.state.name.value,
        email: this.state.email.value,
        phone: this.state.phone.value,
        password: this.state.password.value
      };
      signup(signupRequest)
        .then(response => {
          notification.success({
            message: "App",
            description: strings.registration_successfully_done
          });
          this.props.history.push("/Login");
        })
        .catch(error => {
          notification.error({
            message: "App",
            description:
              error.message || "Sorry! Something went wrong. Please try again!"
          });
        });
    }
  }

  render() {
    return (
      <div className="signup-container">
        <center>
          <h1 className="big_ptxt accent bold">App Title</h1>
        </center>

        <Card>
          <h1 className="med_ptxt" style={{ textAlign: "center",color:'gray' }}>
            {strings.signup}
          </h1>
          <div className="signup-content">
            <Form onSubmit={this.handleSubmit} className="signup-form">
              <FormItem>
                <Input
                  size="large"
                  name={strings.name}
                  style={{ textAlign: "center" }}
                  className="ptxt"
                  suffix={<Icon type="smile" style={{ fontSize: "25px" }} />}
                  placeholder={strings.full_name}
                  value={this.state.name.value}
                  onChange={event => this.handleInputChange(event)}
                />
              </FormItem>
              <FormItem>
                <Input
                  size="large"
                  className="ptxt"
                  name={strings.email}
                  style={{ textAlign: "center" }}
                  suffix={<Icon type="mail" style={{ fontSize: "25px" }} />}
                  type="email"
                  placeholder={strings.email}
                  value={this.state.email.value}
                  onChange={event => this.handleInputChange(event)}
                />
              </FormItem>

              <FormItem>
                <Input
                  size="large"
                  className="ptxt"
                  name="username"
                  style={{ textAlign: "center" }}
                  suffix={<Icon type="user" style={{ fontSize: "25px" }} />}
                  type="username"
                  placeholder={strings.username}
                  value={this.state.email.value}
                  onChange={event => this.handleInputChange(event)}
                />
              </FormItem>
              <FormItem>
                <Input
                  size="large"
                  name="password"
                  className="ptxt"
                  style={{ textAlign: "center" }}
                  suffix={<Icon type="lock" style={{ fontSize: "25px" }} />}
                  type="password"
                  placeholder={strings.password}
                  value={this.state.password.value}
                  onChange={event => this.handleInputChange(event)}
                />
              </FormItem>
              <FormItem style={{ fontSize: 18, textAlign: "center" }}>
                <Button htmlType="submit" size="large" className="primary_btn">
                  {strings.signup}
                </Button>

                <div style={{ marginTop: 20, flexDirection: "row" }}>
                  <h4 className="ptxt">
                    {strings.already_have_account}
                    <span>
                      <Link
                        to="/login"
                        className="ptxt accent"
                        style={{ margin: 10 }}
                      >
                        {strings.login}
                      </Link>
                    </span>
                  </h4>
                </div>
              </FormItem>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}

export default Signup;
