import { ISensorValue } from '@api/models/SensorValue';

export enum RequestFrequency {
    '30m' = '30m',
    '1h' = '1h',
    '5h' = '5h',
    '10h' = '10h',
    '24h' = '24h',
}

export interface ISettings {
    requestFrequency: RequestFrequency;
}

export enum LocationType {
    Point = 'Point',
}

export interface ILocation {
    type: LocationType;

    coordinates: Array<number>;
}

export interface ISensorLastValue {
    pm10: ISensorValue;
    pm25: ISensorValue;
}

export interface ISensor {
    name: string;

    model: string;

    version: string;

    firmwareVersion: string;

    serialNumber: string;

    approvedBySensor: boolean;

    owner: string;

    settings?: ISettings;

    location?: ILocation;

    lastValue?: ISensorLastValue;

    values?: Array<ISensorValue>;
}
