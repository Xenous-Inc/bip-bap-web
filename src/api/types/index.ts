/**
 * @description This interface describes Any Response data structure
 * */
export interface IApiResponse {}

/**
 * @description This interface describes Successful Response data structure
 * */
export interface IApiSuccessResponse<T = unknown> extends IApiResponse {
    data: T;
}

/**
 * @description This interface describes Failed Response data structure
 * */
export interface IApiErrorResponse extends IApiResponse {
    status_code: number;

    error: string;

    message: string;
}

/**
 * @description This enum describes available HTTP Methods
 * */
export enum HTTPMethod {
    Get = 'GET',
    Post = 'POST',
    Delete = 'DELETE',
}
