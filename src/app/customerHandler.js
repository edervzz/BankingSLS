'use strict';

var response = {
    statusCode: 200,
    body: ""
}

module.exports.create = async (event) => {
    try {
        const body = JSON.parse(event.body)
        if (!body) {
            throw new Error("error: customer create: empty body")
        }
        return response
    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}

module.exports.get = async (event) => {
    try {
        console.log(event.pathParameters.id)
        if (!body) {
            throw new Error("error: customer get: empty body")
        }
    } catch (error) {
        response.statusCode = 400
        response.body = error.message
        return response
    }
}

