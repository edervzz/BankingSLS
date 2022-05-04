'use strict';

const response = { statusCode: 200, body: "" }
module.exports.reponse = response

const loginRequest = { username: "", password: "" }
module.exports.loginRequest = loginRequest

const registerRequest = { username: "", password: "", email: "" }
module.exports.registerRequest = registerRequest

module.exports.register = (req = loginRequest) => {
    let r = { ...response }
    if (!req.username || !req.password || !req.email) {
        throw new Error("error: register user: some data is empty")
    }



    return r
}

module.exports.login = (req = loginRequest) => {
    let r = { ...response }
    if (!req.username || !req.password) {
        throw new Error("error: login user: complete user and password")
    }



    return r
}

