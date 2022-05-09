"use strict";
const IS_LOCAL = "isRepositoryStub"
const userStub = require('./userRepositoryStub')
const userDB = require('./userRepositoryDB')

// definición
const userSchema = {
    id: 0, username: "", hassPwd: "", email: "", role: ""
}

function UserRepository() {
    this.create = function (_ctx = new Map(), _username = "", _hassPwd = "", _email = "") { }
    this.find = function (_ctx = new Map(), _username = "", _email = "") { return userSchema }
}

function NewUser(isStub = false) {
    if (isStub) {
        return new userStub.UserRepositoryStub()
    } else {
        return new userDB.UserRepositoryDB()
    }
}

module.exports.userSchema = userSchema
module.exports.UserRepository = UserRepository
module.exports.NewUser = NewUser


// module.exports.create = (_ctx = new Map(), _username = "", _hassPwd = "", _email = "") => {
//     let isStub = _ctx.get(IS_LOCAL)

//     if (isStub) {
//         userStub.createUser({
//             username: _username,
//             email: _email,
//             hassPwd: _hassPwd,
//             role: "ADMIN",
//         })
//     } else {
//         userDB.createUser({
//             username: _username,
//             email: _email,
//             hassPwd: _hassPwd,
//             role: "ADMIN",
//         })
//     }
// }

// module.exports.find = (_ctx = new Map(), _username = "", _email = "") => {
//     let isStub = _ctx.get(IS_LOCAL)

//     if (isStub) {
//         userStub.findUser({
//             username: _username,
//             email: _email,
//         })
//     } else {
//         userDB.findUser({
//             username: _username,
//             email: _email,
//         })
//     }
// }