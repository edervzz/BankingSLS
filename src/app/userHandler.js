'use strict';

const user = require('../service/user')

var response = {
    statusCode: 200,
    body: ""
}

module.exports.create = async (event) => {
    try {
        user.registerRequest = JSON.parse(event.body)
        if (!user.registerRequest) {
            throw new Error("error: user create: empty body")
        }

        user.register(user.registerRequest)

        return response
    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}

module.exports.login = async (event) => {
    try {
        user.loginRequest = JSON.parse(event.body)
        if (!body) {
            throw new Error("error: user login: empty body")
        }

        return response
    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}

