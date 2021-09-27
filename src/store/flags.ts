import { IActionFlag } from '@store/types';

export enum ActionFlags {
    Token = 'Token',
}

export type ITokenFlag = IActionFlag<string>;

export const createTokenFlag = (): ITokenFlag => ({ name: ActionFlags.Token });
