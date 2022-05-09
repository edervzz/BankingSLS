'use strict';

const IS_LOCAL = "isRepositoryStub"
let ctx = new Map()

module.exports.GetContext = () => {
    if (!ctx.size) {
        ctx.set(IS_LOCAL, process.env.IS_LOCAL)
    }
    return ctx
}