const app = require('express')();
const soap = require('soap');
const path = require('path');
const fs = require('fs');
require('./data/redis/redis_client');

const bodyParser = require('body-parser');

const qbwc = require('./qbwc/service');
const { PORT } = require('./config');
const routes = require('./routes');
const { RedisClient } = require('redis');
const wsdl = fs.readFileSync(path.join(__dirname, './external/QBWC.wsdl'), 'utf8');

app.use(bodyParser.raw({
  type: function(){
    return true;
  }, 
  limit: '5mb'
}));

app.route('/').all((req, res, next) => next(`Resource not found`));
app.use('/api', routes);
app.get('/support', (req, res, next) => {
  res.json({
    status: 'ok'
  })
});
app.listen(PORT, function(){
    soap.listen(app, '/qbwc', qbwc, wsdl, function(){
      console.log('server initialized on port ' + PORT);
    });
});