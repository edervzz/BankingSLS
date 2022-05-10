'use strict';

const user = require('./userRepository')

class UserRepositoryStub extends user.UserRepository {
    constructor(_ctx) {
        super(_ctx)
        this.ctx = _ctx
    }

    create(_username = "", _hassPwd = "", _email = "") {

    }

    find(_username = "", _email = "") {
        const u = { ...user.UserRepository.userSchema }
        u.id = 9999
        u.username = "eder"
        u.email = "edervzz@gmail.com"
        u.hassPwd = "$2b$10$CCz0TUy4c5kiyq17/Ns2e.3qDcxfR77Pvl.4YcoVH6HX5tr9ciV4e"
        u.role = "ADMIN"
        return u
    }
}

module.exports.UserRepositoryStub = UserRepositoryStub
