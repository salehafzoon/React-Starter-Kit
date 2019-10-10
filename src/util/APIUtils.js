import { ACCESS_TOKEN, API_BASE_URL } from '../constants/index'

const axios = require('axios');


export function signup(signupRequest) {

    return axios({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        url: API_BASE_URL + "/auth/signup",
        data: {
            'name': signupRequest.name,
            'phone': signupRequest.phone,
            'email': signupRequest.email,
            'password': signupRequest.password
        }
    });

}

export function login(loginRequest) {

    return axios({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        url: API_BASE_URL + "/auth/login",
        data: {
            'email': loginRequest.email,
            'password': loginRequest.password
        }
    });

}


