'use strict';

const user = require('./user')

function UserRepositoryStub() {
    this.createUser = function (_username = userSchema) { }
    this.findUser = function (_username = "", email = "") {
        const u = { ...user.userSchema }
        u.id = 9999
        u.username = "eder"
        u.email = "edervzz@gmail.com"
        u.hassPwd = "$2b$10$CCz0TUy4c5kiyq17/Ns2e.3qDcxfR77Pvl.4YcoVH6HX5tr9ciV4e"
        u.role = "ADMIN"
        return u
    }
}

function NewUserRepositoryStub(ctx) {
    const u = new UserRepositoryStub()
    return u
}

module.exports.NewUserRepositoryStub = NewUserRepositoryStub