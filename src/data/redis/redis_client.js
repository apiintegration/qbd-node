const { promisify } = require('util');
const redis = require('redis').createClient();
redis.on('ready', () => {
    console.log('Redis Client started');
});
redis.on('end', () => {
    console.log('Redis Client ended');
})
redis.on('SIGINT', () => {
    redis.quit((err) => {
        if(err) {
            console.log('errr quitting redis: ' + err.message);
        }
        console.log('Redis quit')
    });
});





module.exports = {
    pop: promisify(redis.blpop).bind(redis),
    push: promisify(redis.rpush).bind(redis)

};