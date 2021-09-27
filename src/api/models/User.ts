import { ISensor } from './Sensor';

export enum UserRole {
    user = 'user',
    admin = 'admin',
}

export interface IUser {
    _id: string;

    name: string;

    type: UserRole;

    email: string;

    sensors: Array<ISensor>;
}
