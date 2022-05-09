'use strict';

const utils = require('../utils/utils')
const user = require('../database/user')

const response = { statusCode: 200, body: "" }
const loginRequest = { username: "", password: "" }
const registerRequest = { username: "", password: "", email: "" }

function UserService(u = new user.UserRepository()) {
    let _user = u
    this.register = async (_ctx = new Map(), req = loginRequest) => {
        let r = { ...response }

        if (!req.username || !req.password || !req.email) {
            throw new Error("error: register user: some data is empty")
        }

        const hashed = await utils.hashPassword(req.password)

        return r
    }

    this.login = async (req = loginRequest) => {
        let r = { ...response }
        if (!req.username || !req.password) {
            throw new Error("error: login user: complete user and password")
        }
        _user.find()
        return r
    }
}

module.exports.reponse = response
module.exports.loginRequest = loginRequest
module.exports.registerRequest = registerRequest
module.exports.UserService = UserService