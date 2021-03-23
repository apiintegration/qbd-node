const { push } = require('../../data/redis/redis_client');
const uuid = require('uuid');
const RedisRequest = require('../../data/redis/model/redis_request')
const { sleep } = require('../../../helpers');
module.exports = {
    listAccounts: async (username) => {
        let reqId = uuid.v1();
        let request = new RedisRequest(username, reqId, 'listAccounts');
        await push("requests", JSON.stringify(request));
        let response;
        while(!response){
            await sleep(2500);
            console.log('hello')
            redis.get(reqId, (err, res) => {
                console.log(res)
            });
        }
    },
}