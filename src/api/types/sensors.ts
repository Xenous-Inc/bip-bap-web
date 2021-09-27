import { ISensor } from '@api/models/Sensor';

/**
 * @description This interface describes fields that would be contained in successful GetAllSensorsResponse
 * */
export interface IGetAllSensorsResponseData {
    sensors: Array<ISensor>;
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
