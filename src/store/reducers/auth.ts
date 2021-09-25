import { IApiState } from '@store/types';
import { IUser } from '@api/models/User';
import { createReducer } from '@reduxjs/toolkit';
import {
    ILogOutActionError,
    ILogOutAllActionError,
    ISignInActionError,
    ISignInActionSuccess,
    ISignUpActionError,
    ISignUpActionSuccess,
    LogOutActions,
    LogOutAllActions,
    SignInActions,
    SignUpActions,
} from '@store/actions/auth/types';

export interface IAuthState extends IApiState {
    user: IUser | null;

    token: string | null;
}

const initialState: IAuthState = {
    isLoading: false,
    token: null,
    user: null,
    error: null,
};

const authReducer = createReducer(initialState, {
    // * Sign In Actions * //
    [SignInActions.Start]: () => ({
        ...initialState,
        isLoading: true,
    }),
    [SignInActions.Success]: (state, action: ISignInActionSuccess) => ({
        ...state,
        token: action.payload.data.token,
        user: action.payload.data.user,
        isLoading: false,
    }),
    [SignInActions.Error]: (state, action: ISignInActionError) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
    }),
    // * Sign Up Actions * //
    [SignUpActions.Start]: () => ({
        ...initialState,
        isLoading: true,
    }),
    [SignUpActions.Success]: (state, action: ISignUpActionSuccess) => ({
        ...state,
        token: action.payload.data.token,
        user: action.payload.data.user,
        isLoading: false,
    }),
    [SignUpActions.Error]: (state, action: ISignUpActionError) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
    }),
    // * Log Out Actions * //
    [LogOutActions.Start]: state => ({
        ...state,
        isLoading: true,
    }),
    [LogOutActions.Success]: () => ({
        ...initialState,
        isLoading: false,
    }),
    [LogOutActions.Error]: (state, action: ILogOutActionError) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
    }),
    // * Log Out All Actions * //
    [LogOutAllActions.Start]: state => ({
        ...state,
        isLoading: true,
    }),
    [LogOutAllActions.Success]: () => ({
        ...initialState,
        isLoading: false,
    }),
    [LogOutAllActions.Error]: (state, action: ILogOutAllActionError) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
    }),
});

export default authReducer;
