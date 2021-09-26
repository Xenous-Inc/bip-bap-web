import { IActionFlag } from '@store/types';

export enum ActionFlags {
    Token = 'Token',
}

export type IActionTokenFlag = IActionFlag<string>;

export const createActionTokenFlag = (token: string): IActionTokenFlag => ({ name: ActionFlags.Token, data: token });
