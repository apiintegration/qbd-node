const router = require('express').Router();
const basicAuth = require('basic-auth');
const { listAccounts } = require('../../qbwc/client');


router.get('/', async (req, res, next) => { 
    let authHeader = req.header('authorization');
    let creds = basicAuth.parse(authHeader);
    if(!creds){ 
        res.status(401).json({"status":"unauthorized"});
        next();
    }
    
    let username = creds.name;
    
    let qbResponse = await listAccounts(username);
    
    console.log(qbResponse)

    res.json({status: 'ok'});
});

module.exports = router;


