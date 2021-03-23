const { pop } = require('../../../../data/redis/redis_client');
const buildRequests = async () => {
   let res = await pop("requests");

    return `<?qbxml version="8.0"?>
            <QBXML>
               <QBXMLMsgsRq onError="stopOnError">
                  <AccountQueryRq requestID="1">
                  </AccountQueryRq>
               </QBXMLMsgsRq>
            </QBXML>`;
}

module.buildRequests = buildRequests;