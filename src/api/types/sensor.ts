/**
 * @description This interface describes necessary PostSensorRequest payload fields
 * */
import { ISensor } from '@api/models/Sensor';

export interface IPostSensorRequestData {
    name: string;

    settings?: any; // todo: replace with normal data model

    model: string;

    version: string;

    firmwareVersion: string;

    location?: any; // todo: replace with normal data model
}

/**
 * @description This interface describes fields that would be contained in successful PostSensorResponse
 * */
export interface IPostSensorResponseData {
    sensor: ISensor;

    sensorToken: string;
}

/**
 * @description This interface describes necessary GetSensorRequest query fields
 * */
export interface IGetSensorRequestQuery {
    id: string;
}

/**
 * @description This interface describes fields that would be contained in successful GetSensorResponse
 * */
export interface IGetSensorResponseData {
    sensor: ISensor;
}

/**
 * @description This interface describes necessary DeleteSensorRequest query fields
 * */
export interface IDeleteSensorRequestQuery {
    id: string;
}
