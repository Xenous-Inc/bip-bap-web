import { IAction, IApiRequestPayload, IErrorPayload, ISuccessPayload } from '@store/types';
import { IGetAllSensorsResponseData, IGetSensorResponseData } from '@api/types/sensors';

export enum GetAllSensorsActions {
    Default = '@Get-All-Sensors',
    Start = '@Get-All-Sensors_start',
    Success = '@Get-All-Sensors_success',
    Error = '@Get-All-Sensors_error',
}

export type IGetAllSensorsAction = IAction<GetAllSensorsActions.Default, IApiRequestPayload>;

export type IGetAllSensorsActionStart = IAction<GetAllSensorsActions.Start>;

export type IGetAllSensorsActionSuccess = IAction<
    GetAllSensorsActions.Success,
    ISuccessPayload<IGetAllSensorsResponseData>
>;

export type IGetAllSensorsActionError = IAction<GetAllSensorsActions.Error, IErrorPayload>;

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
