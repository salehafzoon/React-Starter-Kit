import { ACCESS_TOKEN, API_BASE_URL } from '../constants/index'

const axios = require('axios');


export function signup(signupRequest) {

    return axios({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        url: API_BASE_URL + "/auth/register",
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

export function getCurrentUser() {

    return axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        url: API_BASE_URL + "/user/me",

    });
}
export function loadUserChats() {

    return axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        url: API_BASE_URL + "/user/chat",

    });
}

export function loadChatMessagesApi(chatId) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/chat/message",
        data: {
            'chat_id': chatId
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });

}

export function searchUser(phone) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/user/search",
        data: {
            'phone': phone
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });

}

export function addContact(contactId) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/user/contact/add",
        data: {
            'contact_id': contactId
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });
}

export function loadUserContacts() {

    return axios({
        method: 'get',
        url: API_BASE_URL + "/user/contact",
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });
}

export function createChatApi(createChatReq) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/chat/create",
        data: {
            'name': createChatReq.name,
            'others': createChatReq.others,
            'isPrivate': createChatReq.isPrivate,
            'isChannel': createChatReq.isChannel
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });
}

export function checkIsAdmin(chatId) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/chat/is_admin",
        data: {
            'chat_id': chatId,
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });
}
export function checkIsAllowed(chatId) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/chat/is_allowed",
        data: {
            'chat_id': chatId,
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });
}

export function checkIsBlock(chatId,userId) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/user/is_block",
        data: {
            'chat_id': chatId,
            'user_id':userId
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });
}

export function sendMessageApi(chatId,message) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/chat/message/send",
        data: {
            'chat_id':chatId,
            'content': message,
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });
}

export function getChatInfo(chatId) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/chat/info",
        data: {
            'chat_id':chatId,
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });
}

export function blockUnblockUser(chatId,userId,command) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/user/block_unblock",
        data: {
            'chat_id':chatId,
            'user_id':userId,
            'command':command
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });
}

export function uppdateChatMembers(chatId,members) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/chat/member/update",
        data: {
            'chat_id':chatId,
            'members':members,
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });
}

export function deleteChatApi(chatId) {

    return axios({
        method: 'post',
        url: API_BASE_URL + "/chat/delete",
        data: {
            'chat_id':chatId,
        },
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    });
}


