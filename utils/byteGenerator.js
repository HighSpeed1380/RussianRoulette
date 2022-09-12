const { createHmac } = require('crypto');

function *byteGenerator ({ serverSeed, clientSeed, nonce }) {
    let currentRound = 0;
    while(true) {
        const hmac = createHmac("sha256", serverSeed);
        hmac.update(`${clientSeed}:${nonce}:${currentRound}`);
        const buffer = hmac.digest();
        for (const hexValue of buffer) {
            yield +hexValue;
        }
        currentRound += 1;
    }
}

module.exports = byteGenerator;