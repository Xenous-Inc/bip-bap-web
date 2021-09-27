import { IUser } from '@api/models/User';

/**
 * @description This interface describes necessary SignInRequest payload fields
 * */
export interface ISignInRequestData {
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
export interface ISignUpRequestData {
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
