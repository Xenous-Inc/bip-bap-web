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
import { ILogOutAllRequest, ILogOutRequest, ISignInRequest, ISignUpRequest } from '@api/types/auth';
import Rests, { AuthRests } from '@api/rests';
import { HTTPMethod } from '@api/types';

export const createSignInAction = (raw: ISignInRequest): ISignInAction => ({
    type: SignInActions.Default,
    payload: {
        method: HTTPMethod.Post,
        rest: Rests.auth + AuthRests.signIn,
        data: raw,
    },
});

export const createSignUpAction = (raw: ISignUpRequest): ISignUpAction => ({
    type: SignUpActions.Default,
    payload: {
        method: HTTPMethod.Post,
        rest: Rests.auth + AuthRests.signUp,
        data: raw,
    },
});

export const createLogOutAction = (raw: ILogOutRequest): ILogOutAction => ({
    type: LogOutActions.Default,
    payload: {
        method: HTTPMethod.Get,
        rest: Rests.auth + AuthRests.logOut,
        data: raw,
    },
});

export const createLogOutAllAction = (raw: ILogOutAllRequest): ILogOutAllAction => ({
    type: LogOutAllActions.Default,
    payload: {
        method: HTTPMethod.Get,
        rest: Rests.auth + AuthRests.logOutAll,
        data: raw,
    },
});
