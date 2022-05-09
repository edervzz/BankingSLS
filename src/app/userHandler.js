'use strict';

const user = require('../service/userService')
const context = require('../app/__context')

var response = {
    statusCode: 200,
    body: ""
}

module.exports.create = async (event) => {
    try {
        const ctx = context.GetContext()
        user.registerRequest = JSON.parse(event.body)
        if (!user.registerRequest) {
            throw new Error("error: user create: empty body")
        }


    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}

module.exports.login = async (event) => {
    try {
        const ctx = context.GetContext()
        user.loginRequest = JSON.parse(event.body)
        if (!user.loginRequest) {
            throw new Error("error: user login: empty body")
        }

        let us = new user.UserService(new user)
        us.login()

    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}

