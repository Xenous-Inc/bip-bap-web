import { HTTPMethod } from '@api/types';
import Rests, { SensorRests } from '@api/rests';
import { IDeleteSensorRequestQuery, IGetSensorRequestQuery } from '@api/types/sensors';
import {
    DeleteSensorActions,
    GetAllSensorsActions,
    GetSensorActions,
    IDeleteSensorAction,
    IGetAllSensorsAction,
    IGetSensorAction,
} from '@store/actions/sensor/types';
import { createTokenFlag } from '@store/flags';

export const createGetAllSensorsAction = (): IGetAllSensorsAction => ({
    type: GetAllSensorsActions.Default,
    payload: {
        method: HTTPMethod.Get,
        rest: Rests.sensor + SensorRests.getAll,
        data: {},
        flags: [createTokenFlag()],
    },
});

export const createGetSensorAction = (query: IGetSensorRequestQuery): IGetSensorAction => ({
    type: GetSensorActions.Default,
    payload: {
        method: HTTPMethod.Get,
        rest: Rests.sensor + SensorRests.get(query.id),
        data: {},
        flags: [createTokenFlag()],
    },
});

export const createDeleteSensorAction = (query: IDeleteSensorRequestQuery): IDeleteSensorAction => ({
    type: DeleteSensorActions.Default,
    payload: {
        method: HTTPMethod.Delete,
        rest: Rests.sensor + SensorRests.delete(query.id),
        data: {},
        flags: [createTokenFlag()],
    },
});
