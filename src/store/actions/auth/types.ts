import { ISignInRequestData, ISignInResponseData, ISignUpRequestData, ISignUpResponseData } from '@api/types/auth';
import { IAction, IApiRequestPayload, IErrorPayload, ISuccessPayload } from '@store/types';

export enum SignInActions {
    Default = '@Sign-In',
    Start = '@Sign-In_start',
    Success = '@Sign-In_success',
    Error = '@Sign-In_error',
}

export type ISignInAction = IAction<SignInActions.Default, IApiRequestPayload<ISignInRequestData>>;

export type ISignInActionStart = IAction<SignInActions.Start>;

export type ISignInActionSuccess = IAction<SignInActions.Success, ISuccessPayload<ISignInResponseData>>;

export type ISignInActionError = IAction<SignInActions.Error, IErrorPayload>;

export enum SignUpActions {
    Default = '@Sign-Up',
    Start = '@Sign-Up_start',
    Success = '@Sign-Up_success',
    Error = '@Sign-Up_error',
}

export type ISignUpAction = IAction<SignUpActions.Default, IApiRequestPayload<ISignUpRequestData>>;

export type ISignUpActionStart = IAction<SignUpActions.Start>;

export type ISignUpActionSuccess = IAction<SignUpActions.Success, ISuccessPayload<ISignUpResponseData>>;

export type ISignUpActionError = IAction<SignUpActions.Error, IErrorPayload>;

export enum LogOutActions {
    Default = '@Log-Out',
    Start = '@Log-Out_start',
    Success = '@Log-Out_success',
    Error = '@Log-Out_error',
}

export type ILogOutAction = IAction<LogOutActions.Default, IApiRequestPayload>;

export type ILogOutActionStart = IAction<LogOutActions.Start>;

export type ILogOutActionSuccess = IAction<LogOutActions.Success, ISuccessPayload>;

export type ILogOutActionError = IAction<LogOutActions.Error, IErrorPayload>;

export enum LogOutAllActions {
    Default = '@Log-Out-All',
    Start = '@Log-Out-All_start',
    Success = '@Log-Out-All_success',
    Error = '@Log-Out-All_error',
}

export type ILogOutAllAction = IAction<LogOutAllActions.Default, IApiRequestPayload>;

export type ILogOutAllActionStart = IAction<LogOutAllActions.Start>;

export type ILogOutAllActionSuccess = IAction<LogOutAllActions.Success, ISuccessPayload>;

export type ILogOutAllActionError = IAction<LogOutAllActions.Error, IErrorPayload>;
