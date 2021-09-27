import CryptoJS from 'crypto-js/core';
import SHA256 from 'crypto-js/sha256';
import AES from 'crypto-js/aes';

/**
 * @description This function hashes passed argument unilaterally, it can't be de-hashed
 * */
export const hashUnilaterally = (data: string | any) =>
    SHA256(typeof data === 'string' ? data : JSON.stringify(data)).toString(CryptoJS.enc.Utf8);

/**
 * @description This function encrypt passed argument, result is always different, but it can be decrypted
 * */
export const encrypt = (data: any) => {
    if (!process.env.CRYPTO_SECRET_KEY) throw ReferenceError('Secret Key for Ciphering is not provided');

    return AES.encrypt(JSON.stringify(data), process.env.CRYPTO_SECRET_KEY).toString();
};

/**
 * @description This function decrypt passed argument, that was encrypted by encrypt method
 * */
export const decrypt = (data: any) => {
    if (!process.env.CRYPTO_SECRET_KEY) throw ReferenceError('Secret Key for Ciphering is not provided');

    return JSON.parse(AES.decrypt(data, process.env.CRYPTO_SECRET_KEY).toString(CryptoJS.enc.Utf8));
};
