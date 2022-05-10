'use strict';

const context = require('../app/__context')
const userService = require('../service/userService')
const stub = require('../repository/userRepositoryStub')

const response = {
    statusCode: 200,
    body: ""
}

module.exports.create = async (event) => {
    try {
        const ctx = new context.Context()
        userService.registerRequest = JSON.parse(event.body)

        if (!userService.registerRequest) {
            throw new Error("error: user create: empty body")
        }

        const service = new userService.UserService(new stub.UserRepositoryStub(ctx))

        return await service.register(userService.registerRequest)

    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}

module.exports.login = async (event) => {
    try {
        const ctx = context.Context()
        userService.loginRequest = JSON.parse(event.body)

        console.log(userService.loginRequest);

        if (!userService.loginRequest) {
            throw new Error("error: user login: empty body")
        }

        const service = new userService.UserService(new stub.UserRepositoryStub(ctx))

        return await service.login(userService.loginRequest)

    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}
