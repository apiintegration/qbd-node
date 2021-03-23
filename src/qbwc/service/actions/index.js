const uuid = require('uuid');
// const buildRequests = require('./helpers')
// console.log('buildReqs', buildRequests);

module.exports = {
    serverVersion: () => {
        return '0.0.1';
    },
    clientVersion: () => {
        return '';
    },
    authenticate: (args) => {
        let authSession = uuid.v1();
        
        console.log('auth args', args);
        return {
            authenticateResult:{
                string: [
                    authSession, 
                    ''
                ]
            }
        };
    },
    closeConnection: (args/*, cb, headers*/) => {
        console.log('closeConnection args', args)
        return 'test';
    },
    getLastError: (args/*, cb, headers*/) => {
        console.log('getLastError', args)
        return 'still trying';
    },
    sendRequestXML: (args) => {
        // let reqs = buildRequests();
        // console.log('sendRequestXML',JSON.stringify(args))
        return {
            sendRequestXMLResult: { 'string': `<?xml version="1.0" ?><?qbxml version="8.0"?>
            <QBXML>
               <QBXMLMsgsRq onError="stopOnError">
                  <AccountQueryRq requestID="1">
                  </AccountQueryRq>
               </QBXMLMsgsRq>
            </QBXML>` }
        }
    },
    receiveResponseXML: (args) => {
        console.log(JSON.stringify(args));
        return {receiveResponseXMLResult: {'int': 100}}
    }
}