import { IUser } from '@api/models/User';

/**
 * @description This interface describes necessary SignInRequest payload fields
 * */
export interface ISignInRequest {
    email: string;

    password: string;
}

/**
 * @description This interface describes fields that would be contained in successful SignInResponse
 * */
export interface ISignInResponseData {
    token: string;

    user: IUser;
}

/**
 * @description This interface describes necessary SignUpRequest payload fields
 * */
export interface ISignUpRequest {
    name: string;

    email: string;

    password: string;
}

/**
 * @description This interface describes fields that would be contained in successful SignUpResponse
 * */
export interface ISignUpResponseData {
    token: string;

    user: IUser;
}

/**
 * @description This interface describes necessary LogOutRequest payload fields
 * */
export interface ILogOutRequest {}

/**
 * @description This interface describes fields that would be contained in successful LogOutResponse data
 * */
export interface ILogOutResponseData {}

/**
 * @description This interface describes necessary LogOutAllRequest payload fields
 * */
export interface ILogOutAllRequest {}

/**
 * @description This interface describes fields that would be contained in successful LogOutAllResponse data
 * */
export interface ILogOutAllResponseData {}
