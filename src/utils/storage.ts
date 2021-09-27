import { decrypt, encrypt } from '@utils/crypto';
import { StorageKeys } from '@utils/constants';

export const saveToken = (token: string) => {
    localStorage.setItem(StorageKeys.token, encrypt(token));
};

export const getSavedToken = () => {
    const item = localStorage.getItem(StorageKeys.token);

    return item ? (decrypt(item) as string) : undefined;
};
