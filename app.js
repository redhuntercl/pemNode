const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const publicKey = fs.readFileSync(path.join(__dirname, 'keys/public_key.pem'));
const privateKey = fs.readFileSync(path.join(__dirname, 'keys/private_key.pem'));
const text = 'Texto a encriptar y desencriptar :v';
//#region flujo normal Front a Back
const cryptWithPublicKey = () => {
    return crypto.publicEncrypt({
        key: publicKey,
      },
      Buffer.from(text));
}
const decryptWithPrivateKey = (encryptedText) => {
    return crypto.privateDecrypt(
        {
          key: privateKey,
        },
        encryptedText
    );
}
//#endregion
//#region flujo normal back a front
const cryptWithPrivateKey = () => {
    return crypto.privateEncrypt({
        key: privateKey,
      },
      Buffer.from(text));
}

const decryptWithPublicKey = (encryptedText) => {
    return crypto.publicDecrypt(
        {
          key: publicKey,
        },
        encryptedText
    );
}
//#endregion
console.log("******************************************");
console.log("*****************Front a Back*************");
console.log("******************************************");
const encryptedTextFront = cryptWithPublicKey();
console.log('encrypted: ', encryptedTextFront.toString('base64'));
const decryptedTextBack = decryptWithPrivateKey(encryptedTextFront);
console.log('decrypted:', decryptedTextBack.toString());
console.log("******************************************");
console.log("*****************Back a Front*************");
console.log("******************************************");
const encryptedTextBack = cryptWithPrivateKey();
console.log('encrypted: ', encryptedTextBack.toString('base64'));
const decryptedTextFront = decryptWithPublicKey(encryptedTextBack);
console.log('decrypted:', decryptedTextFront.toString())
