'use strict';

var response = {
    statusCode: 200,
    body: ""
}

module.exports.create = async (event) => {
    try {
        const body = JSON.parse(event.body)
        if (!body) {
            throw new Error("error: account create: empty body")
        }
        return response
    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}

module.exports.getBalance = async (event) => {
    try {
        console.log(event.pathParameters.id)
        if (!body) {
            throw new Error("error: account get balance: empty body")
        }
    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}

module.exports.lock = async (event) => {
    try {
        console.log("id", event.pathParameters.id)
        if (!body) {
            throw new Error("error: account lock: empty body")
        }
    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}

module.exports.unlock = async (event) => {
    try {
        console.log("id", event.pathParameters.id)
        if (!body) {
            throw new Error("error: account unlock: empty body")
        }
    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}