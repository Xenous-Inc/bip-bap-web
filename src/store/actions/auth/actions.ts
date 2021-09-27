import {
    ILogOutAction,
    ILogOutAllAction,
    ISignInAction,
    ISignUpAction,
    LogOutActions,
    LogOutAllActions,
    SignInActions,
    SignUpActions,
} from '@store/actions/auth/types';
import { ISignInRequestData, ISignUpRequestData } from '@api/types/auth';
import Rests, { AuthRests } from '@api/rests';
import { HTTPMethod } from '@api/types';
import { createTokenFlag } from '@store/flags';

export const createSignInAction = (raw: ISignInRequestData): ISignInAction => ({
    type: SignInActions.Default,
    payload: {
        method: HTTPMethod.Post,
        rest: Rests.auth + AuthRests.signIn,
        data: raw,
    },
});

export const createSignUpAction = (raw: ISignUpRequestData): ISignUpAction => ({
    type: SignUpActions.Default,
    payload: {
        method: HTTPMethod.Post,
        rest: Rests.auth + AuthRests.signUp,
        data: raw,
    },
});

export const createLogOutAction = (): ILogOutAction => ({
    type: LogOutActions.Default,
    payload: {
        method: HTTPMethod.Get,
        rest: Rests.auth + AuthRests.logOut,
        data: {},
        flags: [createTokenFlag()],
    },
});

export const createLogOutAllAction = (): ILogOutAllAction => ({
    type: LogOutAllActions.Default,
    payload: {
        method: HTTPMethod.Get,
        rest: Rests.auth + AuthRests.logOutAll,
        data: {},
        flags: [createTokenFlag()],
    },
});
