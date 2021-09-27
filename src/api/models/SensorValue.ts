export enum ValueType {
    'PM25' = 'PM2.5',
    'PM10' = 'PM10',
}

export interface ISensorValue {
    type: ValueType;

    value: number;

    sensor: string;

    isDeleted: boolean;
}
