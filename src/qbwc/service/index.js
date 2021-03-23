const actions = require('./actions');
module.exports = {
    TroubleshootWebServiceFS: { // service
        TroubleshootWebServiceFSSoap12: { //port
            ...actions                      // actions
        }
    }
};