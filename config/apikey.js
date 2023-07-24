const crypto = require("crypto");
function generateApiKey(){
    const apikeylength = 20;
    const randomBytes = crypto.randomBytes(apikeylength);
    return randomBytes.toString('hex');
}
const apikey = generateApiKey();
console.log('Generate API Key',apikey);