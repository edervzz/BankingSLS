'use strict';

const utils = require('../utils/utils')
const user = require('../repository/userRepository')

const response = { statusCode: 200, body: "" }
const loginRequest = { username: "", password: "", email: "" }
const registerRequest = { username: "", password: "", email: "" }

class UserService {
    constructor(repo = new user.UserRepository(null)) {
        this.repo = repo
    }

    async register(request = registerRequest) {
        if (!request.username || !request.password || !request.email) {
            throw new Error("error: register user: some data is empty")
        }

        const hashed = await utils.hashPassword(request.password)
        this.repo.create(request.username, hashed, request.email)

        return response
    }

    async login(request = loginRequest) {
        if (!request.username || !request.password) {
            throw new Error("error: login user: complete user and password")
        }
        const res = { ...response }
        const result = this.repo.find(request.username, request.email)
        res.body = JSON.stringify(result)
        return res
    }
}


module.exports.reponse = response
module.exports.loginRequest = loginRequest
module.exports.registerRequest = registerRequest
module.exports.UserService = UserService