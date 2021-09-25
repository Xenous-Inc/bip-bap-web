import { Action } from 'redux';
import { HTTPMethod, IApiErrorResponse } from '@api/types';

/**
 * @description This interfaces describes the data which every Redux Action contains
 * @field payload - Redux Action payload
 * @field prevAction - Action, that was dispatched before current
 */
export interface IAction<T = string, P = unknown, PA = unknown> extends Action<T> {
    payload: P;
    prevAction?: PA;
}

/**
 * @description This interface describes Redux Action Flag - an entity which redux middleware needs to identify actions they need to catch
 * @field name - Uniq name of Redux Action Flag
 * @field data - Redux Action Flag data
 */
export interface IActionFlag<D = unknown> {
    name: string;
    data?: D;
}

/**
 * @description This interface describes Redux Action Payload data, which needs to create an HTTP request to API
 * @field rest - URI
 * @field method - HTTP method type
 * @field data - API action data
 * @field flags - Array of action flags
 */
export interface IApiRequestPayload<D = unknown> {
    rest: string;
    method: HTTPMethod;
    data: D;
    flags?: Array<IActionFlag>;
}

/**
 * @description This interface describes Payload for Successful Redux Action
 * @field data - Received Result
 * */
export interface ISuccessPayload<D = unknown> {
    data: D;
}

/**
 * @description This interface describes Payload for Failed Redux Action
 * @field error - Received Error
 * */
export interface IErrorPayload<E = Error> {
    error: E;
}

export interface IApiState {
    isLoading: boolean;

    error: Error | IApiErrorResponse | null; // todo: replace with normal errors
}
