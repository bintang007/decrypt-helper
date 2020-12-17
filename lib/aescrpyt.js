const crypto = require('crypto');

const iv = new Buffer(16).fill(0);

const generateCryptKey = value =>
    crypto.createHash('sha256').update(value).digest();


const createDecipher = key => crypto.createDecipheriv('aes-256-cbc', generateCryptKey(key), iv);

const decrypt = (key, encryptData) => {
    encryptData = new Buffer(encryptData, 'base64').toString('binary');
    const decipher = createDecipher(key);
    let decode = decipher.update(encryptData, 'binary', 'utf8');
    decode += decipher.final('utf8')
    return decode
}

module.exports = {
   decrypt
}
