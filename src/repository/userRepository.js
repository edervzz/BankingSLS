"use strict";

class UserRepository {
    static IS_LOCAL = "isRepositoryStub"
    static userSchema = { id: 0, username: "", hassPwd: "", email: "", role: "" }

    constructor(_ctx) {
        this.ctx = _ctx
    }

    create(_username = "", _hassPwd = "", _email = "") { }

    find(_username = "", _email = "") { return { username: "", email: "", role: "" } }
}

module.exports.UserRepository = UserRepository
