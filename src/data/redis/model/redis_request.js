module.exports = class RedisRequst {
    constructor(username, reqId, operation, data) {
        this.username = username;
        this.reqId = reqId;
        this.operation = operation;
        this.data = data;
    }
}