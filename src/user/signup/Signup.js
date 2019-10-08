import React, { Component } from 'react';
import { signup } from '../../util/APIUtils';
import './Signup.css';
import { Link } from 'react-router-dom';

import { Form, Input, Button, notification, Card } from 'antd';
const FormItem = Form.Item;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: ''
            },
            phone: {
                value: ''
            },
            email: {
                value: ''
            },
            password: {
                value: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: {
                value: inputValue,
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.name.value == '' ||
            this.state.phone.value == '' ||
            this.state.email.value == '' ||
            this.state.password.value == '')
            notification.error({
                message: 'Chat App',
                description: 'Fill the form'
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
                        message: 'Chat App',
                        description: "Thank you! You're successfully registered.",
                    });
                    this.props.history.push("/Login");
                }).catch(error => {
                    notification.error({
                        message: 'Chat App',
                        description: error.message || 'Sorry! Something went wrong. Please try again!'
                    });
                });
        }

    }

    render() {
        return (
            <div className="signup-container">
                <Card>
                    <h1 className="page-title">Sign Up</h1>
                    <div className="signup-content">
                        <Form onSubmit={this.handleSubmit} className="signup-form">
                            <FormItem label="Name">
                                <Input
                                    size="large"
                                    name="name"
                                    placeholder="Your full name"
                                    value={this.state.name.value}
                                    onChange={(event) => this.handleInputChange(event)} />
                            </FormItem>
                            <FormItem label="Phone">
                                <Input
                                    size="large"
                                    name="phone"
                                    placeholder="phone number"
                                    value={this.state.phone.value}
                                    onChange={(event) => this.handleInputChange(event)} />
                            </FormItem>
                            <FormItem label="Email">
                                <Input
                                    size="large"
                                    name="email"
                                    type="email"
                                    placeholder="Your email"
                                    value={this.state.email.value}
                                    onChange={(event) => this.handleInputChange(event)} />
                            </FormItem>
                            <FormItem label="Password">
                                <Input
                                    size="large"
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    value={this.state.password.value}
                                    onChange={(event) => this.handleInputChange(event)} />
                            </FormItem>
                            <FormItem>
                                <Button type="primary"
                                    htmlType="submit"
                                    size="large"
                                    className="signup-form-button">Sign up</Button>
                                Already registed? <Link to="/login">Login now!</Link>
                            </FormItem>
                        </Form>
                    </div>

                </Card>
            </div>
        );
    }

}

export default Signup;