import { IAction, IApiRequestPayload, IErrorPayload, ISuccessPayload } from '@store/types';
import { IGetSensorResponseData, IPostSensorRequestData, IPostSensorResponseData } from '@api/types/sensor';

export enum PostSensorActions {
    Default = '@Post-Sensor',
    Start = '@Post-Sensor_start',
    Success = '@Post-Sensor_success',
    Error = '@Post-Sensor_error',
}

export type IPostSensorAction = IAction<PostSensorActions.Default, IApiRequestPayload<IPostSensorRequestData>>;

export type IPostSensorActionStart = IAction<PostSensorActions.Start>;

export type IPostSensorActionSuccess = IAction<PostSensorActions.Success, ISuccessPayload<IPostSensorResponseData>>;

export type IPostSensorActionError = IAction<PostSensorActions.Error, IErrorPayload>;

export enum GetSensorActions {
    Default = '@Get-Sensor',
    Start = '@Get-Sensor_start',
    Success = '@Get-Sensor_success',
    Error = '@Get-Sensor_error',
}

export type IGetSensorAction = IAction<GetSensorActions.Default, IApiRequestPayload>;

export type IGetSensorActionStart = IAction<GetSensorActions.Start>;

export type IGetSensorActionSuccess = IAction<GetSensorActions.Success, ISuccessPayload<IGetSensorResponseData>>;

export type IGetSensorActionError = IAction<GetSensorActions.Error, IErrorPayload>;

export enum DeleteSensorActions {
    Default = '@Delete-Sensor',
    Start = '@Delete-Sensor_start',
    Success = '@Delete-Sensor_success',
    Error = '@Delete-Sensor_error',
}

export type IDeleteSensorAction = IAction<DeleteSensorActions.Default, IApiRequestPayload>;

export type IDeleteSensorActionStart = IAction<DeleteSensorActions.Start>;

export type IDeleteSensorActionSuccess = IAction<DeleteSensorActions.Success, ISuccessPayload>;

export type IDeleteSensorActionError = IAction<DeleteSensorActions.Error, IErrorPayload>;
