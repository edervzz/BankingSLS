'use strict';

const user = require('./userRepository')

class UserRepositoryDB extends user.UserRepository {

    constructor(_ctx) {
        this.ctx = _ctx
    }

    create(_username = "", _hassPwd = "", _email = "") { }

    find(_username = "", _email = "") { }
}

module.exports.UserRepositoryDB = UserRepositoryDB