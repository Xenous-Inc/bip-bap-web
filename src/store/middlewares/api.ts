import { IAction, IApiRequestPayload, IErrorPayload, ISuccessPayload } from '@store/types';
import { Postfixes } from '@store/actions/constants';
import { HTTPMethod, IApiErrorResponse, IApiSuccessResponse } from '@api/types';

const BaseUrl = process.env.BASE_URL || '';

const apiMiddleware = () => (next: any) => (action: IAction<string, IApiRequestPayload>) => {
    if (!action.payload || !action.payload.rest) {
        next(action);
        return;
    }
    const { rest, method, data, flags } = action.payload;
    const prevAction = action;
    const url = BaseUrl + rest;

    next({
        ...action,
        type: action.type + Postfixes.Start,
        prevAction,
    });

    fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: method === HTTPMethod.Get ? undefined : JSON.stringify(data),
    })
        .then(response => {
            response
                .json()
                .then((json: IApiSuccessResponse | IApiErrorResponse) => {
                    if (response.ok)
                        next({
                            ...action,
                            type: action.type + Postfixes.Success,
                            payload: json as IApiSuccessResponse,
                            prevAction,
                        } as IAction<string, ISuccessPayload>);
                    else
                        next({
                            ...action,
                            type: action.type + Postfixes.Error,
                            payload: { error: json },
                            prevAction,
                        } as IAction<string, IErrorPayload<IApiErrorResponse>>);
                })
                .catch((error: Error) =>
                    next({
                        ...action,
                        type: action.type + Postfixes.Error,
                        payload: { error },
                        prevAction,
                    } as IAction<string, IErrorPayload>),);

            return response;
        })
        .catch((error: Error) =>
            next({
                ...action,
                type: action.type + Postfixes.Error,
                payload: { error },
                prevAction,
            } as IAction<string, IErrorPayload>),);
};

export default apiMiddleware;
