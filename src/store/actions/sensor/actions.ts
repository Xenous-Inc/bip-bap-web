import { HTTPMethod } from '@api/types';
import Rests, { SensorRests } from '@api/rests';
import { IDeleteSensorRequestQuery, IGetSensorRequestQuery, IPostSensorRequestData } from '@api/types/sensor';
import {
    DeleteSensorActions,
    GetSensorActions,
    IDeleteSensorAction,
    IGetSensorAction,
    IPostSensorAction,
    PostSensorActions,
} from '@store/actions/sensor/types';
import { createTokenFlag } from '@store/flags';

export const createPostSensorAction = (raw: IPostSensorRequestData): IPostSensorAction => ({
    type: PostSensorActions.Default,
    payload: {
        method: HTTPMethod.Post,
        rest: Rests.sensor + SensorRests.post,
        data: raw,
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
