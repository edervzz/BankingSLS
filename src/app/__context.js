'use strict';
class Context {
    static IS_LOCAL = 'isLocalRepository'

    constructor() {
        this.ctx = new Map()
    }

    get() {
        if (!ctx.size) {
            ctx.set(IS_LOCAL, process.env.IS_LOCAL)
        }
        return ctx
    }

}

module.exports.IS_LOCAL = IS_LOCAL
module.exports.Context = Context

