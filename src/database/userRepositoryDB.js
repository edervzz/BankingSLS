'use strict';

function UserRepositoryDB() {
    this.createUser = function (_username = userSchema) { }
    this.findUser = function (_username = "", email = "") { }
}

function NewUserRepositoryDB(ctx) {
    const u = new UserRepositoryStub()
    return u
}

module.exports.NewUserRepositoryDB = NewUserRepositoryDB